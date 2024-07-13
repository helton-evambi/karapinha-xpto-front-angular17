import { Component, OnInit, inject } from '@angular/core';
import { DashboardContainerComponent } from '../../dashboard-container/dashboard-container.component';
import { MenuItensComponent } from '../../../../components/dashboard/menu-itens/menu-itens.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  ionBarChart,
  ionPerson,
  ionPeople,
  ionPersonCircleOutline,
} from '@ng-icons/ionicons';
import { TableComponent } from '../../../../components/dashboard/table/table.component';
import { RouterLink } from '@angular/router';
import { ModalComponent } from '../../../../components/modal/modal.component';
import { ActionCardComponent } from '../../../../components/dashboard/action-card/action-card.component';
import { UserService } from '../../../../services/user.service';
import { User } from '../../../../models/user.model';
import { Observable } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { statusName } from '../../../../../utils/status';
import { ToastrService } from 'ngx-toastr';

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
    AsyncPipe,
    NgIf,
  ],
  viewProviders: [
    provideIcons({
      ionBarChart,
      ionPerson,
      ionPeople,
      ionPersonCircleOutline,
    }),
  ],
  templateUrl: './list-administative.component.html',
  styleUrl: './list-administative.component.scss',
})
export class ListAdministativeComponent implements OnInit {
  private userService = inject(UserService);
  private toastr = inject(ToastrService);
  administatives$!: Observable<User[]>;
  administrativeId: number = 0;
  modalVisibility: boolean = false;

  ngOnInit(): void {
    this.administatives$ = this.userService.getUsers();
  }

  getStatus(status: string): string {
    return statusName(status);
  }

  openModal(administrativeId: number) {
    this.modalVisibility = true;
    this.administrativeId = administrativeId;
  }
  closeModal() {
    this.modalVisibility = false;
  }

  updateStatus(status: string) {
    this.userService.updateUserStatus(this.administrativeId, status).subscribe({
      next: () => {
        this.toastr.success('Estado atualizado com sucesso');
        this.administatives$ = this.userService.getUsers();
        this.closeModal();
      },
      error: (errorMessage) =>
        this.toastr.error('Ocorreu um erro ao actualizar o estado'),
    });
  }
}
