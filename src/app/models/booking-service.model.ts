import { Professional } from './professional.model';
import { Service } from './service.model';
import { Time } from './time.model';

export interface BookingServices {
  Service: Service;
  Professional?: Professional;
  Date?: string;
  Time?: Time;
}
