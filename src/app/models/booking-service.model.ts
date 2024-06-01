import { Professional } from './professional.model';
import { Service } from './service.model';

export interface BookingService {
  service: Service;
  professional: Professional;
  date: Date;
  time: string;
}
