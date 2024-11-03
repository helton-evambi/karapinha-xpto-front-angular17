import { BookingServices } from './booking-service.model';
import { User } from './user.model';

export interface Booking {
  BookingId?: number;
  Services: BookingServices[];
  ActivationDate?: string;
  User?: User;
  UserId: number;
  Price: number;
  Status: string;
}
