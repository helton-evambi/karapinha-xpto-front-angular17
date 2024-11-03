import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ActionCardComponent } from '../../../../components/dashboard/action-card/action-card.component';
import { MenuItensComponent } from '../../../../components/dashboard/menu-itens/menu-itens.component';
import { TableComponent } from '../../../../components/dashboard/table/table.component';
import { ModalComponent } from '../../../../components/modal/modal.component';
import { DashboardContainerComponent } from '../../dashboard-container/dashboard-container.component';
import { ProfessionalService } from '../../../../services/professional.service';
import { Observable } from 'rxjs';
import { statusName } from '../../../../../utils/status';
import { Professional } from '../../../../models/professional.model';
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
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-professional',
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
  templateUrl: './list-professional.component.html',
  styleUrl: './list-professional.component.scss',
})
export class ListProfessionalComponent {
  private professionalService = inject(ProfessionalService);
  private toastr = inject(ToastrService);

  professionals$!: Observable<Professional[]>;
  timeProfessional$!: Observable<Professional>;
  professionalId: number = 0;
  modalVisibility: boolean = false;
  modalTimeVisibility: boolean = false;

  ngOnInit(): void {
    this.professionals$ = this.professionalService.getBProfessioals();
  }

  deleteProfessional() {
    this.professionalService.deleteProfessioal(this.professionalId).subscribe({
      next: () => {
        this.toastr.success('Professional eliminado com sucesso');
        this.professionals$ = this.professionalService.getBProfessioals();
        this.closeModal();
      },
    });
  }

  getStatus(status: string): string {
    return statusName(status);
  }

  openModal(professionalId: number) {
    this.modalVisibility = true;
  }

  openModalTime(professionalId: number) {
    this.modalTimeVisibility = true;
    this.timeProfessional$ =
      this.professionalService.getProfessioalById(professionalId);
    console.log(professionalId);
  }

  closeModal() {
    this.modalVisibility = false;
    this.modalTimeVisibility = false;
  }
}
