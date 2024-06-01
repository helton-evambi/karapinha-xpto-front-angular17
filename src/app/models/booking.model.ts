import { BookingService } from './booking-service.model';
import { Time } from './time.model';

export interface Booking {
  BookingId: string;
  Services: BookingService[];
  Total: Time;
  Status: string;
}
