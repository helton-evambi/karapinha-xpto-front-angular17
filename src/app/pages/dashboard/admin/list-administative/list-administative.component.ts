import { Component } from '@angular/core';
import { DashboardContainerComponent } from '../../dashboard-container/dashboard-container.component';
import { MenuItensComponent } from '../../../../components/dashboard/menu-itens/menu-itens.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionBarChart, ionPerson, ionPeople } from '@ng-icons/ionicons';
import { TableComponent } from '../../../../components/dashboard/table/table.component';
import { RouterLink } from '@angular/router';
import { ModalComponent } from '../../../../components/modal/modal.component';
import { ActionCardComponent } from '../../../../components/dashboard/action-card/action-card.component';

@Component({
  selector: 'app-list-administative',
  standalone: true,
  imports: [
    DashboardContainerComponent,
    MenuItensComponent,
    NgIconComponent,
    TableComponent,
    ModalComponent,
    ActionCardComponent,
    RouterLink,
  ],
  viewProviders: [
    provideIcons({
      ionBarChart,
      ionPerson,
      ionPeople,
    }),
  ],
  templateUrl: './list-administative.component.html',
  styleUrl: './list-administative.component.scss',
})
export class ListAdministativeComponent {
  administrativeId: number = 0;
  modalVisibility: boolean = false;
  openModal(administrativeId: number) {
    this.modalVisibility = true;
    this.administrativeId = administrativeId;
  }
  closeModal() {
    this.modalVisibility = false;
  }
}
