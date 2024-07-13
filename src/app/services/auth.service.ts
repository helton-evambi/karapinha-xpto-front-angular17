import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private route = inject(Router);

  register(formData: FormData): Observable<User> {
    return this.http
      .post<User>('https://localhost:44350/api/users', formData)
      .pipe(catchError(this.handleError));
  }

  login(Identifier: string, Password: string): Observable<User> {
    return this.http
      .post<User>('https://localhost:44350/api/auth/login', {
        Identifier,
        Password,
      })
      .pipe(catchError(this.handleError));
  }

  logout() {
    sessionStorage.setItem('isLogged', 'false');
    sessionStorage.clear();
    this.route.navigate(['/']);
  }
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Erro inesperado!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('isLogged') === 'true';
  }
}
