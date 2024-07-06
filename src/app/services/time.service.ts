import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  private http = inject(HttpClient);

  getTimes(): Observable<Time[]> {
    return this.http.get<Time[]>('https://localhost:44350/api/times');
  }

  getTimeById(id: number): Observable<Time> {
    return this.http.get<Time>(`https://localhost:44350/api/times/${id}`);
  }
}