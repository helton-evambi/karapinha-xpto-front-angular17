import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Booking } from '../../../../models/booking.model';
import { BookingService } from '../../../../services/booking.service';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
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
import { matBookmarks } from '@ng-icons/material-icons/baseline';
import { ActionCardComponent } from '../../../../components/dashboard/action-card/action-card.component';
import { MenuItensComponent } from '../../../../components/dashboard/menu-itens/menu-itens.component';
import { TableComponent } from '../../../../components/dashboard/table/table.component';
import { ModalComponent } from '../../../../components/modal/modal.component';
import { DashboardContainerComponent } from '../../dashboard-container/dashboard-container.component';
import { statusName } from '../../../../../utils/status';

interface CalendarDay {
  date: Date;
  otherMonth: boolean;
}

@Component({
  selector: 'app-monthly-schedule',
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
    CommonModule,
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
  templateUrl: './monthly-schedule.component.html',
  styleUrl: './monthly-schedule.component.scss',
})
export class MonthlyScheduleComponent {
  private bookingService = inject(BookingService);
  private toastr = inject(ToastrService);

  bookings$!: Observable<Booking[]>;
  booking$!: Observable<Booking>;
  bookingId: number = 0;
  modalVisibility: boolean = false;
  modalServiceVisibility: boolean = false;

  calendarDays$: BehaviorSubject<CalendarDay[][]>;
  currentMonthYear: Date;
  weekDays: string[] = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  constructor() {
    this.currentMonthYear = new Date();
    this.calendarDays$ = new BehaviorSubject<CalendarDay[][]>([]);
  }

  ngOnInit(): void {
    this.bookings$ = this.bookingService.getBookings();
    this.loadBookingsForMonth(this.currentMonthYear);
    this.generateCalendar();
  }

  generateCalendar() {
    const year = this.currentMonthYear.getFullYear();
    const month = this.currentMonthYear.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const firstDayOfCalendar = new Date(firstDayOfMonth);
    firstDayOfCalendar.setDate(
      firstDayOfCalendar.getDate() - firstDayOfCalendar.getDay()
    );

    const lastDayOfCalendar = new Date(lastDayOfMonth);
    lastDayOfCalendar.setDate(
      lastDayOfCalendar.getDate() + (6 - lastDayOfCalendar.getDay())
    );

    const calendar: CalendarDay[][] = [];
    let week: CalendarDay[] = [];

    for (
      let day = new Date(firstDayOfCalendar);
      day <= lastDayOfCalendar;
      day.setDate(day.getDate() + 1)
    ) {
      week.push({
        date: new Date(day),
        otherMonth: day.getMonth() !== month,
      });

      if (week.length === 7) {
        calendar.push(week);
        week = [];
      }
    }

    this.calendarDays$.next(calendar);
  }

  bookingsByDate: { [key: string]: Booking[] } = {};

  loadBookingsForMonth(date: Date) {
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    this.bookingService
      .getBookings()
      .pipe(
        map((bookings) =>
          bookings.filter((booking) => {
            const bookingDate = new Date(booking.ActivationDate ?? '');
            return bookingDate >= startOfMonth && bookingDate <= endOfMonth;
          })
        ),
        tap((bookings) => {
          this.bookingsByDate = this.groupBookingsByDate(bookings);
        })
      )
      .subscribe();
  }

  groupBookingsByDate(bookings: Booking[]): { [key: string]: Booking[] } {
    return bookings.reduce((acc, booking) => {
      const dateKey = new Date(booking.ActivationDate ?? '').toDateString();
      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }
      acc[dateKey].push(booking);
      return acc;
    }, {} as { [key: string]: Booking[] });
  }

  getBookingsForDay(date: Date): Booking[] {
    return this.bookingsByDate[date.toDateString()] || [];
  }

  previousMonth() {
    this.currentMonthYear.setMonth(this.currentMonthYear.getMonth() - 1);
    this.generateCalendar();
    this.loadBookingsForMonth(this.currentMonthYear);
  }

  nextMonth() {
    this.currentMonthYear.setMonth(this.currentMonthYear.getMonth() + 1);
    this.generateCalendar();
    this.loadBookingsForMonth(this.currentMonthYear);
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
}
