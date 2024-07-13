import { Component, inject, OnInit } from '@angular/core';
import { DashboardContainerComponent } from '../../dashboard-container/dashboard-container.component';
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
} from '@ng-icons/ionicons';
import { MenuItensComponent } from '../../../../components/dashboard/menu-itens/menu-itens.component';
import { DashboardCardComponent } from '../../../../components/dashboard/dashboard-card/dashboard-card.component';
import { TableComponent } from '../../../../components/dashboard/table/table.component';
import { RouterLink } from '@angular/router';
import { BookingService } from '../../../../services/booking.service';
import { Observable, of } from 'rxjs';
import { AsyncPipe, CommonModule, NgIf, NgIfContext } from '@angular/common';
import { Professional } from '../../../../models/professional.model';
import { ProfessionalService } from '../../../../services/professional.service';
import { Service } from '../../../../models/service.model';
import { ServiceService } from '../../../../services/service.service';
import { CommaExpr } from '@angular/compiler';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    DashboardContainerComponent,
    NgIconComponent,
    MenuItensComponent,
    DashboardCardComponent,
    TableComponent,
    RouterLink,
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
    }),
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent implements OnInit {
  private bookingService = inject(BookingService);
  private professionalService = inject(ProfessionalService);
  private serviceService = inject(ServiceService);

  revenue$!: Observable<number>;
  topProfessionals$!: Observable<Professional[]>;
  mostRequestedService$!: Observable<Service>;
  leastRequestedService$!: Observable<Service>;

  revenueOptions: boolean = false;
  ngOnInit(): void {
    this.revenue$ = of(0);
    this.topProfessionals$ = this.professionalService.getTop5Professionals();
    this.mostRequestedService$ = this.serviceService.getMostRequestedService();
    this.leastRequestedService$ =
      this.serviceService.getLeastRequestedService();
  }

  showRevenueOptions() {
    this.revenueOptions = true;
  }

  getRevenueForToday() {
    this.revenue$ = this.bookingService.getRevenueForToday();
    this.revenueOptions = false;
  }

  getRevenueForYesterday() {
    this.revenue$ = this.bookingService.getRevenueForYesterday();
    this.revenueOptions = false;
  }

  getRevenueForCurrentMonth() {
    this.revenue$ = this.bookingService.getRevenueForCurrentMonth();
    this.revenueOptions = false;
  }

  getRevenueForLastMonth() {
    this.revenue$ = this.bookingService.getRevenueForLastMonth();
    this.revenueOptions = false;
  }
}
