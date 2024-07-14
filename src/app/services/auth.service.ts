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

  isLoggedIn(): boolean {
    return sessionStorage.getItem('isLogged') === 'true';
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocorreu um erro desconhecido';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Erro: ${error.error.message}`;
    } else {
      if (error.status === 409) {
        errorMessage =
          error.error ||
          'Um usuário com este nome de usuário ou e-mail já existe.';
      } else {
        errorMessage = `Código do erro: ${error.status}, mensagem: ${
          error.error || error.statusText
        }`;
      }
    }
    return throwError(() => new Error(errorMessage));
  }
}
