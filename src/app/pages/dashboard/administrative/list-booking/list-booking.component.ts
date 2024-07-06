import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { statusName } from '../../../../../utils/status';
import { Booking } from '../../../../models/booking.model';
import { BookingService } from '../../../../services/booking.service';
import { DashboardContainerComponent } from '../../dashboard-container/dashboard-container.component';
import { MenuItensComponent } from '../../../../components/dashboard/menu-itens/menu-itens.component';
import { NgIconComponent } from '@ng-icons/core';
import { TableComponent } from '../../../../components/dashboard/table/table.component';
import { ModalComponent } from '../../../../components/modal/modal.component';
import { ActionCardComponent } from '../../../../components/dashboard/action-card/action-card.component';
import { RouterLink } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';

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
  templateUrl: './list-booking.component.html',
  styleUrl: './list-booking.component.scss',
})
export class ListBookingComponent {
  private bookingService = inject(BookingService);
  bookings$!: Observable<Booking[]>;
  bookingId: number = 0;
  modalVisibility: boolean = false;

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
  closeModal() {
    this.modalVisibility = false;
  }
}
