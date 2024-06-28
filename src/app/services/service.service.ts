import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../models/service.model';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private http = inject(HttpClient);

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>('https://localhost:44350/api/services');
  }

  getServiceById(id: number): Observable<Service> {
    return this.http.get<Service>(`https://localhost:44350/api/services/${id}`);
  }

  createService(formData: FormData): Observable<any> {
    return this.http.post('https://localhost:44350/api/services', formData);
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete<any>(`https://localhost:44350/api/services/${id}`);
  }

  getMostRequestedService(): Observable<Service> {
    return this.http.get<Service>(
      'https://localhost:44350/api/services/most-requested'
    );
  }

  getLeastRequestedService(): Observable<Service> {
    return this.http.get<Service>(
      'https://localhost:44350/api/services/least-requested'
    );
  }
}
