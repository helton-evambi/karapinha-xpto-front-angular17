import { Component } from '@angular/core';
import { BookingComponent } from '../booking/booking.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionPersonAdd, ionChevronDown } from '@ng-icons/ionicons';

@Component({
  selector: 'app-choose-professional',
  standalone: true,
  imports: [BookingComponent, NgIconComponent],
  viewProviders: [
    provideIcons({
      ionPersonAdd,
      ionChevronDown,
    }),
  ],
  templateUrl: './choose-professional.component.html',
  styleUrl: './choose-professional.component.scss',
})
export class ChooseProfessionalComponent {}
