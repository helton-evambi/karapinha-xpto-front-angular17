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
      EmailAddress: 'helton@gmail.com',
      FirstName: 'Helton',
      LastName: 'Evambi',
      IdCard: 'vfdvdfbhdf',
      PhomeNumber: 929419140,
      PhotoUrl: '../../../assets/images/person1.jpg',
      Category: {
        CategoryId: 1,
        Nome: 'Maquiagem',
        Description: 'kjsk',
        Imagem: 'fsdf',
        Status: 'active',
      },
      Times: [
        {
          TimeId: 1,
          Hour: 12,
          Minute: 30,
        },
      ],
    },
    {
      ProfissionalId: 1,
      EmailAddress: 'helton@gmail.com',
      FirstName: 'Helton',
      LastName: 'Evambi',
      IdCard: 'vfdvdfbhdf',
      PhomeNumber: 929419140,
      PhotoUrl: '../../../assets/images/person1.jpg',
      Category: {
        CategoryId: 1,
        Nome: 'Maquiagem',
        Description: 'kjsk',
        Imagem: 'fsdf',
        Status: 'active',
      },
      Times: [
        {
          TimeId: 1,
          Hour: 12,
          Minute: 30,
        },
      ],
    },
    {
      ProfissionalId: 1,
      EmailAddress: 'helton@gmail.com',
      FirstName: 'Helton',
      LastName: 'Evambi',
      IdCard: 'vfdvdfbhdf',
      PhomeNumber: 929419140,
      PhotoUrl: '../../../assets/images/person1.jpg',
      Category: {
        CategoryId: 1,
        Nome: 'Maquiagem',
        Description: 'kjsk',
        Imagem: 'fsdf',
        Status: 'active',
      },
      Times: [
        {
          TimeId: 1,
          Hour: 12,
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
