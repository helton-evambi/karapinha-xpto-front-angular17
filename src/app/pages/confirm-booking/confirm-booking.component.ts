import { Component, OnInit, inject } from '@angular/core';
import { BookingComponent } from '../booking/booking.component';
import { AsyncPipe, NgIf } from '@angular/common';
import { BookingService } from '../../services/booking.service';
import { Booking } from '../../models/booking.model';
import { Observable } from 'rxjs';
import { Service } from '../../models/service.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { PdfGeneratorService } from '../../services/pdf-generator.service';

@Component({
  selector: 'app-confirm-booking',
  standalone: true,
  imports: [BookingComponent, NgIf, AsyncPipe],
  templateUrl: './confirm-booking.component.html',
  styleUrl: './confirm-booking.component.scss',
})
export class ConfirmBookingComponent implements OnInit {
  private bookingService = inject(BookingService);
  private toastr = inject(ToastrService);
  private route = inject(Router);
  private pdfGeneratorService = inject(PdfGeneratorService);

  getBooking$!: Observable<Booking>;
  submitBooking!: Booking;
  ngOnInit(): void {
    this.getBooking$ = this.bookingService.getBookingData();
  }

  subimit() {
    this.getBooking$.subscribe((value) => (this.submitBooking = value));
    if (this.submitBooking.BookingId) {
      this.bookingService
        .updateBooking(this.submitBooking.BookingId, this.submitBooking)
        .subscribe({
          next: () => {
            this.toastr.success('Marcação atualizada com sucesso');

            console.log(this.submitBooking);
            this.generatePDF(this.submitBooking);
            this.route.navigate(['user/list-booking']);
            this.bookingService.clearBookingData();
          },
          error: () =>
            this.toastr.error(
              'Ocorreu um erro ao fazer a actualizacao da marcação'
            ),
        });
    } else {
      this.bookingService.createBooking(this.submitBooking).subscribe({
        next: () => {
          this.toastr.success('Marcação efetuada com sucesso');
          this.generatePDF(this.submitBooking);
          this.route.navigate(['user/list-booking']);
          this.bookingService.clearBookingData();
        },
        error: () => this.toastr.error('Ocorreu um erro ao fazer a marcação'),
      });
    }
  }

  generatePDF(bookinData: Booking) {
    this.pdfGeneratorService.generatePDF(bookinData);
  }
}
