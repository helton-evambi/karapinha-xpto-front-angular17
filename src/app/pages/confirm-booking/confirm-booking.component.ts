import { Component, OnInit, inject } from '@angular/core';
import { BookingComponent } from '../booking/booking.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { BookingService } from '../../services/booking.service';
import { Booking } from '../../models/booking.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-confirm-booking',
  standalone: true,
  imports: [BookingComponent, NgIf, AsyncPipe],
  templateUrl: './confirm-booking.component.html',
  styleUrl: './confirm-booking.component.scss',
})
export class ConfirmBookingComponent implements OnInit {
  private bookingService = inject(BookingService);
  getBooking$!: Observable<Booking>;

  ngOnInit(): void {
    this.getBooking$ = this.bookingService.getBookingData();
  }
}
