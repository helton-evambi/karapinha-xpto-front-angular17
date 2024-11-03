import { Component } from '@angular/core';
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
import {
  matBookmarks,
  matAdd,
  matSearch,
  matCalendarMonth,
} from '@ng-icons/material-icons/baseline';
import { DashboardCardComponent } from '../../../../components/dashboard/dashboard-card/dashboard-card.component';
import { MenuItensComponent } from '../../../../components/dashboard/menu-itens/menu-itens.component';
import { DashboardContainerComponent } from '../../dashboard-container/dashboard-container.component';

@Component({
  selector: 'app-manage-booking',
  standalone: true,
  imports: [
    DashboardContainerComponent,
    MenuItensComponent,
    DashboardCardComponent,
    NgIconComponent,
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
      ionDocumentAttach,
      ionDuplicateOutline,
      matBookmarks,
      matAdd,
      matSearch,
      matCalendarMonth,
    }),
  ],
  templateUrl: './manage-booking.component.html',
  styleUrl: './manage-booking.component.scss',
})
export class ManageBookingComponent {}
