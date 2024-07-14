import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  ionBarChart,
  ionPerson,
  ionPeople,
  ionTrendingUpSharp,
  ionTrendingDownSharp,
  ionCashOutline,
  ionArrowUp,
  ionArrowDown,
  ionDocumentAttach,
  ionDuplicateOutline,
} from '@ng-icons/ionicons';
import { DashboardCardComponent } from '../../../../components/dashboard/dashboard-card/dashboard-card.component';
import { MenuItensComponent } from '../../../../components/dashboard/menu-itens/menu-itens.component';
import { TableComponent } from '../../../../components/dashboard/table/table.component';
import { DashboardContainerComponent } from '../../dashboard-container/dashboard-container.component';
import { matBookmarks } from '@ng-icons/material-icons/baseline';
import { Observable } from 'rxjs';
import { Professional } from '../../../../models/professional.model';
import { Service } from '../../../../models/service.model';
import { BookingService } from '../../../../services/booking.service';
import { ProfessionalService } from '../../../../services/professional.service';
import { ServiceService } from '../../../../services/service.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-administartive-dashboard',
  standalone: true,
  imports: [
    DashboardContainerComponent,
    NgIconComponent,
    MenuItensComponent,
    DashboardCardComponent,
    TableComponent,
    RouterLink,
    AsyncPipe,
    CommonModule,
  ],
  viewProviders: [
    provideIcons({
      ionBarChart,
      ionPerson,
      ionPeople,
      ionTrendingUpSharp,
      ionTrendingDownSharp,
      ionCashOutline,
      ionArrowUp,
      ionArrowDown,
      ionDocumentAttach,
      ionDuplicateOutline,
      matBookmarks,
    }),
  ],
  templateUrl: './administartive-dashboard.component.html',
  styleUrl: './administartive-dashboard.component.scss',
})
export class AdministartiveDashboardComponent {
  private bookingService = inject(BookingService);
  private professionalService = inject(ProfessionalService);
  private serviceService = inject(ServiceService);

  revenue!: number;
  topProfessionals$!: Observable<Professional[]>;
  mostRequestedService$!: Observable<Service>;
  leastRequestedService$!: Observable<Service>;

  revenueOptions: boolean = false;
  ngOnInit(): void {
    this.bookingService
      .getRevenueForToday()
      .subscribe((value) => (this.revenue = value));
    this.topProfessionals$ = this.professionalService.getTop5Professionals();
    this.mostRequestedService$ = this.serviceService.getMostRequestedService();
    this.leastRequestedService$ =
      this.serviceService.getLeastRequestedService();
  }

  showRevenueOptions() {
    this.revenueOptions = true;
  }

  getRevenueForToday() {
    this.bookingService
      .getRevenueForToday()
      .subscribe((value) => (this.revenue = value));
    this.revenueOptions = false;
  }

  getRevenueForYesterday() {
    this.bookingService
      .getRevenueForYesterday()
      .subscribe((value) => (this.revenue = value));
    this.revenueOptions = false;
  }

  getRevenueForCurrentMonth() {
    this.bookingService
      .getRevenueForCurrentMonth()
      .subscribe((value) => (this.revenue = value));
    this.revenueOptions = false;
  }

  getRevenueForLastMonth() {
    this.bookingService
      .getRevenueForLastMonth()
      .subscribe((value) => (this.revenue = value));
    this.revenueOptions = false;
  }
}
