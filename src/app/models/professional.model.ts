import { Category } from './category.model';
import { Time } from './time.model';

export interface Professional {
  ProfessionalId: number;
  FirstName: string;
  LastName: string;
  EmailAddress: string;
  PhotoUrl: string;
  IdCard: string;
  PhoneNumber: number;
  Category: Category;
  Times: Time[];
}
