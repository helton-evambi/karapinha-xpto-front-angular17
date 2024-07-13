import { Injectable, inject } from '@angular/core';
import { Booking } from '../models/booking.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Service } from '../models/service.model';
import { Professional } from '../models/professional.model';
import { BookingServices } from '../models/booking-service.model';
import { Time } from '../models/time.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private bookingData: Booking = {
    Services: [],
    Price: 0,
    Status: 'pending',
    UserId: Number(sessionStorage.getItem('id')),
  };

  private bookingDataSubject$ = new BehaviorSubject<Booking>(this.bookingData);
  private http = inject(HttpClient);

  getBookingData(): Observable<Booking> {
    return this.bookingDataSubject$.asObservable();
  }

  initBooking(booking: Booking) {
    this.bookingData = booking;
    this.bookingData.UserId =
      this.bookingData.User?.UserId ?? Number(sessionStorage.getItem('id'));
    this.bookingDataSubject$.next(this.bookingData);
  }
  addService(service: Service) {
    const serviceIndex = this.bookingData.Services.findIndex(
      (s) => s.Service.ServiceId === service.ServiceId
    );
    if (serviceIndex !== -1) {
      this.bookingData.Services[serviceIndex].Service.Price;
      this.bookingData.Services.splice(serviceIndex, 1);
      this.bookingData.Price -= service.Price;
    } else {
      // Se o serviço não existir, adicioná-lo e ajustar o preço
      this.bookingData.Services.push({
        Service: service,
        Professional: undefined,
        Date: undefined,
        Time: undefined,
      });
      this.bookingData.Price += service.Price;
    }
    // Atualiza o observable com os dados atualizados
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
      UserId: Number(sessionStorage.getItem('id')),
    };
    this.bookingDataSubject$.next(this.bookingData);
  }

  ////////////////////////////////////////////////////////

  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>('https://localhost:44350/api/bookings');
  }

  getBookingById(id: number): Observable<Booking> {
    return this.http.get<Booking>(`https://localhost:44350/api/bookings/${id}`);
  }

  createBooking(booking: Booking): Observable<any> {
    return this.http.post('https://localhost:44350/api/bookings', booking);
  }

  deleteBooking(id: number): Observable<any> {
    return this.http.delete<any>(`https://localhost:44350/api/bookings/${id}`);
  }

  updateBooking(id: number, bookingData: Booking): Observable<any> {
    return this.http.put<any>(
      `https://localhost:44350/api/bookings/${id}`,
      bookingData
    );
  }

  updateBookingStatus(id: number, status: string): Observable<any> {
    const body = `"${status}"`;
    return this.http.put<any>(
      `https://localhost:44350/api/bookings/updateStatus/${id}`,
      body,
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  getRevenueForToday(): Observable<number> {
    return this.http.get<number>(
      'https://localhost:44350/api/bookings/revenue/today'
    );
  }

  getRevenueForYesterday(): Observable<number> {
    return this.http.get<number>(
      'https://localhost:44350/api/bookings/revenue/yesterday'
    );
  }

  getRevenueForCurrentMonth(): Observable<number> {
    return this.http.get<number>(
      'https://localhost:44350/api/bookings/revenue/current-month'
    );
  }

  getRevenueForLastMonth(): Observable<number> {
    return this.http.get<number>(
      'https://localhost:44350/api/bookings/revenue/last-month'
    );
  }
}
