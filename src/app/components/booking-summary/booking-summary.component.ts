import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-booking-summary',
  standalone: true,
  imports: [],
  templateUrl: './booking-summary.component.html',
  styleUrl: './booking-summary.component.scss',
})
export class BookingSummaryComponent {
  @Input() step: number = 1;
}
