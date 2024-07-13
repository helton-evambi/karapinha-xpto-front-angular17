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
import { DashboardCardComponent } from '../../../../components/dashboard/dashboard-card/dashboard-card.component';
import { MenuItensComponent } from '../../../../components/dashboard/menu-itens/menu-itens.component';
import { TableComponent } from '../../../../components/dashboard/table/table.component';
import { DashboardContainerComponent } from '../../dashboard-container/dashboard-container.component';
import { matBookmarks } from '@ng-icons/material-icons/baseline';

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
export class AdministartiveDashboardComponent {}
