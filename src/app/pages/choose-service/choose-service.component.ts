import { Component } from '@angular/core';
import { BookingComponent } from '../booking/booking.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionAddCircle, ionCheckmarkCircleSharp } from '@ng-icons/ionicons';

@Component({
  selector: 'app-choose-service',
  standalone: true,
  imports: [BookingComponent, NgIconComponent],
  viewProviders: [
    provideIcons({
      ionAddCircle,
      ionCheckmarkCircleSharp,
    }),
  ],
  templateUrl: './choose-service.component.html',
  styleUrl: './choose-service.component.scss',
})
export class ChooseServiceComponent {}
