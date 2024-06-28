import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { User } from '../models/user.model';
import { Session } from 'node:inspector';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

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

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Erro inesperado!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
