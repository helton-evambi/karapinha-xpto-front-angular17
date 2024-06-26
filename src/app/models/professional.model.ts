import { Category } from './category.model';
import { Time } from './time.model';

export interface Professional {
  ProfissionalId: number;
  FirstName: string;
  LastName: string;
  EmailAddress: string;
  PhotoUrl: string;
  IdCard: string;
  PhomeNumber: number;
  Category: Category;
  Times: Time[];
}
