import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-summary',
  standalone: true,
  imports: [],
  templateUrl: './booking-summary.component.html',
  styleUrl: './booking-summary.component.scss',
})
export class BookingSummaryComponent {
  private router = inject(Router);
  @Input() step: number = 1;

  continue() {
    if (this.step == 1) this.router.navigate(['booking/choose-profissional']);
    if (this.step == 2) this.router.navigate(['booking/choose-time']);
    if (this.step == 3) this.router.navigate(['booking/confirm']);
  }
}
