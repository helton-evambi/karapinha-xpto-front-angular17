import { Professional } from './professional.model';
import { Service } from './service.model';

export interface BookingServices {
  Service: Service;
  Professional?: Professional;
  Date?: string;
  TimeId?: number;
}
