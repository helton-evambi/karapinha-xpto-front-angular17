import { Component } from '@angular/core';
import { DashboardContainerComponent } from '../../dashboard-container/dashboard-container.component';
import { MenuItensComponent } from '../../../../components/dashboard/menu-itens/menu-itens.component';
import { ionBarChart, ionPerson, ionPeople } from '@ng-icons/ionicons';
import {
  matPersonAddAlt1,
  matPersonSearch,
} from '@ng-icons/material-icons/baseline';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { DashboardCardComponent } from '../../../../components/dashboard/dashboard-card/dashboard-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-manage-administrative',
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
    }),
  ],
  templateUrl: './manage-administrative.component.html',
  styleUrl: './manage-administrative.component.scss',
})
export class ManageAdministrativeComponent {}
