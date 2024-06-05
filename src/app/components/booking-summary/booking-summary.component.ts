import { Component, Input, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Booking } from '../../models/booking.model';
import { BookingService } from '../../services/booking.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-booking-summary',
  standalone: true,
  imports: [AsyncPipe, NgIf],
  templateUrl: './booking-summary.component.html',
  styleUrl: './booking-summary.component.scss',
})
export class BookingSummaryComponent implements OnInit {
  private bookingService = inject(BookingService);
  private router = inject(Router);
  getBooking$!: Observable<Booking>;
  @Input() step: number = 1;

  ngOnInit(): void {
    this.getBooking$ = this.bookingService.getBookingData();
  }

  continue() {
    if (this.step == 1) this.router.navigate(['booking/choose-profissional']);
    if (this.step == 2) this.router.navigate(['booking/choose-time']);
    if (this.step == 3) this.router.navigate(['booking/confirm']);
  }
}
