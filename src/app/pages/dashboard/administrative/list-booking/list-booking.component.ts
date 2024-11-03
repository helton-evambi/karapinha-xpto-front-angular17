import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { statusName } from '../../../../../utils/status';
import { Booking } from '../../../../models/booking.model';
import { BookingService } from '../../../../services/booking.service';
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
  selector: 'app-list-booking',
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
  templateUrl: './list-booking.component.html',
  styleUrl: './list-booking.component.scss',
})
export class ListBookingComponent {
  private bookingService = inject(BookingService);
  private toastr = inject(ToastrService);

  bookings$!: Observable<Booking[]>;
  booking$!: Observable<Booking>;
  bookingId: number = 0;
  modalVisibility: boolean = false;
  modalServiceVisibility: boolean = false;

  ngOnInit(): void {
    this.bookings$ = this.bookingService.getBookings();
  }

  getStatus(status: string): string {
    return statusName(status);
  }

  openModal(bookingId: number) {
    this.modalVisibility = true;
    this.bookingId = bookingId;
  }

  openServiceModal(bookingId: number) {
    this.modalServiceVisibility = true;
    this.booking$ = this.bookingService.getBookingById(bookingId);
  }

  closeModal() {
    this.modalVisibility = false;
    this.modalServiceVisibility = false;
  }

  deleteBooking() {
    this.bookingService.deleteBooking(this.bookingId).subscribe({
      next: () => {
        this.toastr.success('Marcacao eliminada com sucesso');
        this.bookings$ = this.bookingService.getBookings();
        this.closeModal();
      },
    });
  }

  updateStatus(status: string) {
    this.bookingService.updateBookingStatus(this.bookingId, status).subscribe({
      next: () => {
        this.toastr.success('Estado atualizado com sucesso');
        this.bookings$ = this.bookingService.getBookings();
        this.closeModal();
      },
      error: (errorMessage) =>
        this.toastr.error('Ocorreu um erro ao actualizar o estado'),
    });
  }
}
