import { Component } from '@angular/core';
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
export class AdminDashboardComponent {}
