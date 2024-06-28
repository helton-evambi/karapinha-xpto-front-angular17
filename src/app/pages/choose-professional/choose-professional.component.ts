import { Component, OnInit, inject } from '@angular/core';
import { BookingComponent } from '../booking/booking.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionPersonAdd, ionChevronDown } from '@ng-icons/ionicons';
import { ModalComponent } from '../../components/modal/modal.component';
import { Professional } from '../../models/professional.model';
import { BookingService } from '../../services/booking.service';
import { Observable } from 'rxjs';
import { Booking } from '../../models/booking.model';
import { AsyncPipe, NgIf } from '@angular/common';
import { ProfessionalService } from '../../services/professional.service';

@Component({
  selector: 'app-choose-professional',
  standalone: true,
  imports: [BookingComponent, NgIconComponent, ModalComponent, AsyncPipe, NgIf],
  viewProviders: [
    provideIcons({
      ionPersonAdd,
      ionChevronDown,
    }),
  ],
  templateUrl: './choose-professional.component.html',
  styleUrl: './choose-professional.component.scss',
})
export class ChooseProfessionalComponent implements OnInit {
  private bookingService = inject(BookingService);
  private professionalService = inject(ProfessionalService);

  getBooking$!: Observable<Booking>;
  professionals$!: Observable<Professional[]>;

  ngOnInit(): void {
    this.getBooking$ = this.bookingService.getBookingData();
  }

  serviceId: number = 0;
  modalVisibility: boolean = false;
  openModal(serviceId: number) {
    this.modalVisibility = true;
    this.serviceId = serviceId;
    this.professionals$ = this.professionalService.getByService(serviceId);
  }
  closeModal() {
    this.modalVisibility = false;
  }
  addProfessional(professional: Professional) {
    this.bookingService.setProfessional(this.serviceId, professional);
    this.closeModal();
  }
}
