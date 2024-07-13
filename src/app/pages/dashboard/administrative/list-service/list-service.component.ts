import { Component, inject } from '@angular/core';
import { Service } from '../../../../models/service.model';
import { AsyncPipe, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { Observable } from 'rxjs';
import { statusName } from '../../../../../utils/status';
import { ActionCardComponent } from '../../../../components/dashboard/action-card/action-card.component';
import { MenuItensComponent } from '../../../../components/dashboard/menu-itens/menu-itens.component';
import { TableComponent } from '../../../../components/dashboard/table/table.component';
import { ModalComponent } from '../../../../components/modal/modal.component';
import { ServiceService } from '../../../../services/service.service';
import { DashboardContainerComponent } from '../../dashboard-container/dashboard-container.component';
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
import { matBookmarks } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-list-service',
  standalone: true,
  imports: [
    DashboardContainerComponent,
    MenuItensComponent,
    NgIconComponent,
    TableComponent,
    ModalComponent,
    ActionCardComponent,
    RouterLink,
    AsyncPipe,
    NgIf,
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
  templateUrl: './list-service.component.html',
  styleUrl: './list-service.component.scss',
})
export class ListServiceComponent {
  private serviceService = inject(ServiceService);
  services$!: Observable<Service[]>;
  serviceId: number = 0;
  modalVisibility: boolean = false;

  ngOnInit(): void {
    this.services$ = this.serviceService.getServices();
  }

  getStatus(status: string): string {
    return statusName(status);
  }

  openModal(bookingId: number) {
    this.modalVisibility = true;
    this.serviceId = bookingId;
  }
  closeModal() {
    this.modalVisibility = false;
  }
}
