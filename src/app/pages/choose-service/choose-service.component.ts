import { Component, OnInit, inject } from '@angular/core';
import { BookingComponent } from '../booking/booking.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionAddCircle, ionCheckmarkCircleSharp } from '@ng-icons/ionicons';
import { Service } from '../../models/service.model';
import { AsyncPipe, NgIf } from '@angular/common';
import { BookingService } from '../../services/booking.service';
import { Booking } from '../../models/booking.model';
import { Observable } from 'rxjs';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-choose-service',
  standalone: true,
  imports: [BookingComponent, NgIconComponent, AsyncPipe, NgIf],
  viewProviders: [
    provideIcons({
      ionAddCircle,
      ionCheckmarkCircleSharp,
    }),
  ],
  templateUrl: './choose-service.component.html',
  styleUrl: './choose-service.component.scss',
})
export class ChooseServiceComponent implements OnInit {
  private bookingService = inject(BookingService);
  private serviceService = inject(ServiceService);

  getBooking$!: Observable<Booking>;
  services$!: Observable<Service[]>;

  onClick(service: Service) {
    this.bookingService.addService(service);
  }
  ngOnInit(): void {
    this.getBooking$ = this.bookingService.getBookingData();
    this.services$ = this.serviceService.getServices();
  }
}
