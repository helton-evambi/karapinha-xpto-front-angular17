import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { statusName } from '../../../../utils/status';
import { Booking } from '../../../models/booking.model';
import { BookingService } from '../../../services/booking.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ActionCardComponent } from '../../../components/dashboard/action-card/action-card.component';
import { MenuItensComponent } from '../../../components/dashboard/menu-itens/menu-itens.component';
import { TableComponent } from '../../../components/dashboard/table/table.component';
import { ModalComponent } from '../../../components/modal/modal.component';
import { DashboardContainerComponent } from '../../dashboard/dashboard-container/dashboard-container.component';
import { ionPersonCircle } from '@ng-icons/ionicons';
import { matBookmarks } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-user-list-booking',
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
      ionPersonCircle,
      matBookmarks,
    }),
  ],
  templateUrl: './user-list-booking.component.html',
  styleUrl: './user-list-booking.component.scss',
})
export class UserListBookingComponent {
  private bookingService = inject(BookingService);
  private route = inject(Router);
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

  editBooking(booking: Booking) {
    this.bookingService.initBooking(booking);
    this.route.navigate(['booking/choose-profissional']);
  }
}
