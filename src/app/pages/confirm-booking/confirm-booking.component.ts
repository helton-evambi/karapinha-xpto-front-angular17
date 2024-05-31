import { Component } from '@angular/core';
import { BookingComponent } from '../booking/booking.component';

@Component({
  selector: 'app-confirm-booking',
  standalone: true,
  imports: [BookingComponent],
  templateUrl: './confirm-booking.component.html',
  styleUrl: './confirm-booking.component.scss',
})
export class ConfirmBookingComponent {}
