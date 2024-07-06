import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>('https://localhost:44350/api/users')
      .pipe(
        tap((value) =>
          value.sort((a, b) => a.FirstName.localeCompare(b.FirstName))
        )
      );
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`https://localhost:44350/api/users/${id}`);
  }

  getUserByUsername(username: string): Observable<User> {
    return this.http.get<User>(
      `https://localhost:44350/api/users/username/${username}`
    );
  }

  getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(
      `https://localhost:44350/api/users/email${email}`
    );
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`https://localhost:44350/api/users/${id}`);
  }
}
