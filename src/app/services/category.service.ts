import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from '../models/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private http = inject(HttpClient);

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('https://localhost:44350/api/categories');
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(
      `https://localhost:44350/api/categories/${id}`
    );
  }

  createCategory(formData: FormData): Observable<any> {
    return this.http.post('https://localhost:44350/api/categories', formData);
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete<any>(
      `https://localhost:44350/api/categories/${id}`
    );
  }
}
