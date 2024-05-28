import { Component, Input } from '@angular/core';
import { BookingSummaryComponent } from '../../components/booking-summary/booking-summary.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionArrowBackOutline, ionCloseOutline } from '@ng-icons/ionicons';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [BookingSummaryComponent, NgIconComponent],
  viewProviders: [
    provideIcons({
      ionArrowBackOutline,
      ionCloseOutline,
    }),
  ],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
})
export class BookingComponent {
  @Input() stepTitle: string = '';
  @Input() stepNumber: number = 1;
}
