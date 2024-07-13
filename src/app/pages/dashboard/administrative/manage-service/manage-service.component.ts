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
  matAdd,
  matBookmarks,
  matPersonAddAlt1,
  matPersonSearch,
  matSearch,
} from '@ng-icons/material-icons/baseline';
import { DashboardCardComponent } from '../../../../components/dashboard/dashboard-card/dashboard-card.component';
import { MenuItensComponent } from '../../../../components/dashboard/menu-itens/menu-itens.component';
import { DashboardContainerComponent } from '../../dashboard-container/dashboard-container.component';

@Component({
  selector: 'app-manage-service',
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
    }),
  ],
  templateUrl: './manage-service.component.html',
  styleUrl: './manage-service.component.scss',
})
export class ManageServiceComponent {}
