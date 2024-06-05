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
  getBooking$!: Observable<Booking>;

  ngOnInit(): void {
    this.getBooking$ = this.bookingService.getBookingData();
  }
  professional: Professional[] = [
    {
      ProfissionalId: 1,
      Email: 'helton@gmail.com',
      Nome: 'Helton Evambi',
      IdCard: 'vfdvdfbhdf',
      PhomeNumber: 929419140,
      Photo: '../../../assets/images/person1.jpg',
      Time: [
        {
          TimeId: 1,
          Hour: 12,
          Minute: 30,
        },
      ],
    },
    {
      ProfissionalId: 2,
      Email: 'helton@gmail.com',
      Nome: 'Joao Miguel',
      IdCard: 'vfdvdfbhdf',
      PhomeNumber: 929419140,
      Photo: '../../../assets/images/person2.jpg',
      Time: [
        {
          TimeId: 1,
          Hour: 14,
          Minute: 30,
        },
        {
          TimeId: 2,
          Hour: 15,
          Minute: 30,
        },
      ],
    },
    {
      ProfissionalId: 3,
      Email: 'helton@gmail.com',
      Nome: 'Antonio da Silva',
      IdCard: 'vfdvdfbhdf',
      PhomeNumber: 929419140,
      Photo: '../../../assets/images/person3.jpg',
      Time: [
        {
          TimeId: 1,
          Hour: 9,
          Minute: 30,
        },
      ],
    },
    {
      ProfissionalId: 4,
      Email: 'helton@gmail.com',
      Nome: 'Elma Ventura',
      IdCard: 'vfdvdfbhdf',
      PhomeNumber: 929419140,
      Photo: '../../../assets/images/person4.jpg',
      Time: [
        {
          TimeId: 1,
          Hour: 13,
          Minute: 30,
        },
      ],
    },
    {
      ProfissionalId: 5,
      Email: 'helton@gmail.com',
      Nome: 'Gilda Correia',
      IdCard: 'vfdvdfbhdf',
      PhomeNumber: 929419140,
      Photo: '../../../assets/images/person2.jpg',
      Time: [
        {
          TimeId: 1,
          Hour: 10,
          Minute: 30,
        },
      ],
    },
  ];
  serviceId: number = 0;
  modalVisibility: boolean = false;
  openModal(serviceId: number) {
    this.modalVisibility = true;
    this.serviceId = serviceId;
  }
  closeModal() {
    this.modalVisibility = false;
  }
  addProfessional(professional: Professional) {
    this.bookingService.setProfessional(this.serviceId, professional);
    this.closeModal();
  }
}
