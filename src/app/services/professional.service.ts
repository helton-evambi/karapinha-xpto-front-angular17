import { Injectable, inject } from '@angular/core';
import { Professional } from '../models/professional.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfessionalService {
  private http = inject(HttpClient);

  getBProfessioals(): Observable<Professional[]> {
    return this.http.get<Professional[]>(
      'https://localhost:44350/api/professionals'
    );
  }

  getProfessioalById(id: number): Observable<Professional> {
    return this.http.get<Professional>(
      `https://localhost:44350/api/professionals/${id}`
    );
  }

  createProfessioal(formData: FormData): Observable<any> {
    return this.http.post(
      'https://localhost:44350/api/professionals',
      formData
    );
  }

  deleteProfessioal(id: number): Observable<any> {
    return this.http.delete<any>(
      `https://localhost:44350/api/professionals/${id}`
    );
  }

  getByCategory(id: number): Observable<Professional[]> {
    return this.http.get<Professional[]>(
      `https://localhost:44350/api/professionals/getByCategory/${id}`
    );
  }

  getByService(id: number): Observable<Professional[]> {
    return this.http.get<Professional[]>(
      `https://localhost:44350/api/professionals/getByService/${id}`
    );
  }

  getTop5Professionals(): Observable<Professional[]> {
    return this.http.get<Professional[]>(
      'https://localhost:44350/api/professionals/top5'
    );
  }

  getCountBooking(id: number): Observable<number> {
    return this.http.get<number>(
      `https://localhost:44350/api/professionals/getCountBooking/${id}`
    );
  }
}
