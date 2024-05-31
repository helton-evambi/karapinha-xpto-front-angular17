import { Component, Input, inject } from '@angular/core';
import { BookingSummaryComponent } from '../../components/booking-summary/booking-summary.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionArrowBackOutline, ionCloseOutline } from '@ng-icons/ionicons';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [BookingSummaryComponent, NgIconComponent, RouterLink],
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
  private navegate = inject(Location);

  @Input() stepTitle: string = '';
  @Input() stepNumber: number = 1;

  goBack() {
    this.navegate.back();
  }
}
