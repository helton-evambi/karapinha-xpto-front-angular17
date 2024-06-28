import { BookingServices } from './booking-service.model';
import { Time } from './time.model';
import { User } from './user.model';

export interface Booking {
  BookingId?: number;
  Services: BookingServices[];
  User?: User;
  UserId: number;
  Price: number;
  Status: string;
}
