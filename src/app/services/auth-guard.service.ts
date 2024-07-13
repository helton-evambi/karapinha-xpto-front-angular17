import { Injectable, inject } from '@angular/core';
import {
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const requiredRole = next.data['requiredRole'] as string;
    const userId = Number(sessionStorage.getItem('id'));

    if (!userId) {
      this.router.navigate(['/login']);
      return of(false);
    }

    return this.userService.getUserById(userId).pipe(
      map((user) => {
        if (
          this.authService.isLoggedIn() &&
          user.Role === requiredRole &&
          user.Status === 'active'
        ) {
          return true;
        }
        if (user.Role !== 'administrative') {
          this.router.navigate(['/login']);
        }
        return false;
      })
    );
  }

  administrative(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    const userId = Number(sessionStorage.getItem('id'));

    if (!userId) {
      this.router.navigate(['/login']);
      return of(false);
    }

    return this.userService.getUserById(userId).pipe(
      map((user) => {
        if (
          this.authService.isLoggedIn() &&
          user.Role === 'administrative' &&
          (user.Status === 'active' || user.Status === 'pending')
        ) {
          return true;
        }
        this.router.navigate(['/login']);
        return false;
      })
    );
  }
}

export const AuthGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> => {
  return inject(AuthGuardService).canActivate(next, state);
};

export const AuthGuardAdministrative: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> => {
  return inject(AuthGuardService).administrative(next, state);
};
