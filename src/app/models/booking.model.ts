import { BookingServices } from './booking-service.model';
import { Time } from './time.model';

export interface Booking {
  BookingId?: number;
  Services: BookingServices[];
  Total: number;
  Status: string;
}
