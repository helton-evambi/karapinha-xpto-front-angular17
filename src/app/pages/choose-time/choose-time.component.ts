import { Component, NgModule, OnInit, inject } from '@angular/core';
import { BookingComponent } from '../booking/booking.component';
import { ionTimeOutline, ionChevronDown } from '@ng-icons/ionicons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ModalComponent } from '../../components/modal/modal.component';
import { BookingService } from '../../services/booking.service';
import { Observable } from 'rxjs';
import { Booking } from '../../models/booking.model';
import { AsyncPipe, NgIf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { Time } from '../../models/time.model';

@Component({
  selector: 'app-choose-time',
  standalone: true,
  imports: [
    BookingComponent,
    NgIconComponent,
    ModalComponent,
    AsyncPipe,
    NgIf,
    FormsModule,
  ],
  viewProviders: [
    provideIcons({
      ionTimeOutline,
      ionChevronDown,
    }),
  ],
  templateUrl: './choose-time.component.html',
  styleUrl: './choose-time.component.scss',
})
export class ChooseTimeComponent implements OnInit {
  private bookingService = inject(BookingService);
  getBooking$!: Observable<Booking>;
  modalVisibility: boolean = false;

  ngOnInit(): void {
    this.getBooking$ = this.bookingService.getBookingData();
  }

  serviceId: number = 0;

  openModal(serviceId: number) {
    this.modalVisibility = true;
    this.serviceId = serviceId;
  }
  closeModal() {
    this.modalVisibility = false;
  }

  addDate(serviceId: number, date: string) {
    this.bookingService.setDate(serviceId, date);
  }

  addTime(time: Time) {
    this.bookingService.setTime(this.serviceId, time);
    this.closeModal();
  }
}
