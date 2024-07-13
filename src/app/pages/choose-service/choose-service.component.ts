import { Component, OnInit, inject } from '@angular/core';
import { BookingComponent } from '../booking/booking.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionAddCircle, ionCheckmarkCircleSharp } from '@ng-icons/ionicons';
import { Service } from '../../models/service.model';
import { AsyncPipe, NgIf } from '@angular/common';
import { BookingService } from '../../services/booking.service';
import { Booking } from '../../models/booking.model';
import { Observable } from 'rxjs';
import { ServiceService } from '../../services/service.service';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-choose-service',
  standalone: true,
  imports: [BookingComponent, NgIconComponent, AsyncPipe, NgIf, FormsModule],
  viewProviders: [
    provideIcons({
      ionAddCircle,
      ionCheckmarkCircleSharp,
    }),
  ],
  templateUrl: './choose-service.component.html',
  styleUrl: './choose-service.component.scss',
})
export class ChooseServiceComponent implements OnInit {
  private bookingService = inject(BookingService);
  private serviceService = inject(ServiceService);
  private categoryService = inject(CategoryService);

  getBooking$!: Observable<Booking>;
  services$!: Observable<Service[]>;
  categories$!: Observable<Category[]>;

  onClick(service: Service) {
    this.bookingService.addService(service);
  }

  getServices(category: string) {
    this.services$ = this.serviceService.getServicesByCategory(
      Number(category)
    );
  }
  ngOnInit(): void {
    this.getBooking$ = this.bookingService.getBookingData();
    this.categories$ = this.categoryService.getCategories();
  }
}
