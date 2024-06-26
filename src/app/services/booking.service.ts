import { Injectable } from '@angular/core';
import { Booking } from '../models/booking.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Service } from '../models/service.model';
import { Professional } from '../models/professional.model';
import { BookingServices } from '../models/booking-service.model';
import { Time } from '../models/time.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private bookingData: Booking = {
    Services: [],
    Price: 0,
    Status: 'pending',
  };

  private bookingDataSubject$ = new BehaviorSubject<Booking>(this.bookingData);

  getBookingData(): Observable<Booking> {
    return this.bookingDataSubject$.asObservable();
  }

  addService(service: Service) {
    this.bookingData.Services.push({
      Service: service,
      Professional: undefined,
      Date: undefined,
      Time: undefined,
    });
    this.bookingDataSubject$.next(this.bookingData);
  }

  removeService(serviceId: number) {
    this.bookingData.Services = this.bookingData.Services.filter(
      (s: BookingServices) => s.Service.ServiceId !== serviceId
    );
    this.bookingDataSubject$.next(this.bookingData);
  }

  setProfessional(serviceId: number, professional: Professional) {
    const service = this.bookingData.Services.find(
      (s: BookingServices) => s.Service.ServiceId == serviceId
    );
    if (service) {
      service.Professional = professional;
    }
    this.bookingDataSubject$.next(this.bookingData);
  }

  setDate(serviceId: number, date: string) {
    const service = this.bookingData.Services.find(
      (s: BookingServices) => s.Service.ServiceId == serviceId
    );
    if (service) {
      service.Date = date;
    }
    this.bookingDataSubject$.next(this.bookingData);
  }

  setTime(serviceId: number, time: Time) {
    const service = this.bookingData.Services.find(
      (s: BookingServices) => s.Service.ServiceId == serviceId
    );
    if (service) {
      service.Time = time;
    }
    this.bookingDataSubject$.next(this.bookingData);
  }

  setPrice(price: number) {
    this.bookingData.Price = price;
    this.bookingDataSubject$.next(this.bookingData);
  }

  clearBookingData() {
    this.bookingData = {
      Services: [],
      Price: 0,
      Status: 'pending',
    };
    this.bookingDataSubject$.next(this.bookingData);
  }
}
