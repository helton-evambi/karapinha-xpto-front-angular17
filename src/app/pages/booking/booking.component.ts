import { Component, Input } from '@angular/core';
import { BookingSummaryComponent } from '../../components/booking-summary/booking-summary.component';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [BookingSummaryComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
})
export class BookingComponent {
  @Input() stepTitle: string = '';
  @Input() stepNumber: number = 1;
}
