import { Component, OnInit, inject } from '@angular/core';
import { statusName } from '../../../../../utils/status';
import { Observable } from 'rxjs';
import { User } from '../../../../models/user.model';
import { UserService } from '../../../../services/user.service';
import { DashboardContainerComponent } from '../../dashboard-container/dashboard-container.component';
import { MenuItensComponent } from '../../../../components/dashboard/menu-itens/menu-itens.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { TableComponent } from '../../../../components/dashboard/table/table.component';
import { ModalComponent } from '../../../../components/modal/modal.component';
import { ActionCardComponent } from '../../../../components/dashboard/action-card/action-card.component';
import { RouterLink } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
import {
  ionBarChart,
  ionPeople,
  ionPerson,
  ionPersonCircleOutline,
} from '@ng-icons/ionicons';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-user',
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
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss',
})
export class ListUserComponent implements OnInit {
  private userService = inject(UserService);
  private toastr = inject(ToastrService);
  users$!: Observable<User[]>;
  userId: number = 0;
  modalVisibility: boolean = false;

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }

  getStatus(status: string): string {
    return statusName(status);
  }

  openModal(userId: number) {
    this.modalVisibility = true;
    this.userId = userId;
  }
  closeModal() {
    this.modalVisibility = false;
  }

  updateStatus(status: string) {
    this.userService.updateUserStatus(this.userId, status).subscribe({
      next: () => {
        this.toastr.success('Estado atualizado com sucesso');
        this.users$ = this.userService.getUsers();
        this.closeModal();
      },
      error: (errorMessage) =>
        this.toastr.error('Ocorreu um erro ao actualizar o estado'),
    });
  }
}
