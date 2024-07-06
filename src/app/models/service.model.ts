import { Category } from './category.model';

export interface Service {
  ServiceId: number;
  Name: string;
  Description: string;
  Image: string;
  Price: number;
  EstimatedTime: number;
  Status: string;
  Category: Category;
}
