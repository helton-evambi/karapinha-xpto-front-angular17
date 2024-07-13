import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  ionBarChart,
  ionPerson,
  ionPeople,
  ionPersonCircle,
} from '@ng-icons/ionicons';
import {
  matBookmarkAdd,
  matBookmarks,
  matContentPasteSearch,
  matPersonAddAlt1,
  matPersonSearch,
} from '@ng-icons/material-icons/baseline';
import { DashboardCardComponent } from '../../../components/dashboard/dashboard-card/dashboard-card.component';
import { MenuItensComponent } from '../../../components/dashboard/menu-itens/menu-itens.component';
import { DashboardContainerComponent } from '../../dashboard/dashboard-container/dashboard-container.component';

@Component({
  selector: 'app-user-manage-booking',
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
      matPersonAddAlt1,
      matPersonSearch,
      matBookmarkAdd,
      matContentPasteSearch,
      ionPersonCircle,
      matBookmarks,
    }),
  ],
  templateUrl: './user-manage-booking.component.html',
  styleUrl: './user-manage-booking.component.scss',
})
export class UserManageBookingComponent {}
