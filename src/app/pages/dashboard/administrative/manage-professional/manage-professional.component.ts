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
  matPersonAddAlt1,
  matPersonSearch,
} from '@ng-icons/material-icons/baseline';
import { DashboardCardComponent } from '../../../../components/dashboard/dashboard-card/dashboard-card.component';
import { MenuItensComponent } from '../../../../components/dashboard/menu-itens/menu-itens.component';
import { DashboardContainerComponent } from '../../dashboard-container/dashboard-container.component';

@Component({
  selector: 'app-manage-professional',
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
      matPersonAddAlt1,
      matPersonSearch,
    }),
  ],
  templateUrl: './manage-professional.component.html',
  styleUrl: './manage-professional.component.scss',
})
export class ManageProfessionalComponent {}
