import { Component, OnInit, inject } from '@angular/core';
import { BookingComponent } from '../booking/booking.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionAddCircle, ionCheckmarkCircleSharp } from '@ng-icons/ionicons';
import { Service } from '../../models/service.model';
import { AsyncPipe, NgIf } from '@angular/common';
import { BookingService } from '../../services/booking.service';
import { Booking } from '../../models/booking.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-choose-service',
  standalone: true,
  imports: [BookingComponent, NgIconComponent, AsyncPipe, NgIf],
  viewProviders: [
    provideIcons({
      ionAddCircle,
      ionCheckmarkCircleSharp,
    }),
  ],
  templateUrl: './choose-service.component.html',
  styleUrl: './choose-service.component.scss',
})
export class ChooseServiceComponent implements OnInit {
  private bookingService = inject(BookingService);
  getBooking$!: Observable<Booking>;
  services: Service[] = [
    {
      ServiceId: 1,
      Category: {
        CategoryId: 1,
        Nome: 'Maquiagem',
        Description: 'kjsk',
        Imagem: 'fsdf',
        Status: 'active',
      },
      Description: 'Um servico muito bom',
      Image: 'sdfsdnfkjsd',
      Nome: 'Gel',
      Price: 10000,
      EstimatedTime: 60,
      Status: 'active',
    },
    {
      ServiceId: 2,
      Category: {
        CategoryId: 1,
        Nome: 'Maquiagem',
        Description: 'kjsk',
        Imagem: 'fsdf',
        Status: 'active',
      },
      Description: 'Um servico muito bom e agradável',
      Image: 'sdfsdnfkjsd',
      Nome: 'Pedicure',
      Price: 15000,
      EstimatedTime: 60,
      Status: 'active',
    },
    {
      ServiceId: 3,
      Category: {
        CategoryId: 1,
        Nome: 'Maquiagem',
        Description: 'kjsk',
        Imagem: 'fsdf',
        Status: 'active',
      },
      Description: 'Um servico muito bom',
      Image: 'sdfsdnfkjsd',
      Nome: 'Unhas',
      Price: 10000,
      EstimatedTime: 60,
      Status: 'active',
    },
    {
      ServiceId: 4,
      Category: {
        CategoryId: 1,
        Nome: 'Maquiagem',
        Description: 'kjsk',
        Imagem: 'fsdf',
        Status: 'active',
      },
      Description: 'Um servico muito bom',
      Image: 'sdfsdnfkjsd',
      Nome: 'Corte de cabelo',
      Price: 10000,
      EstimatedTime: 60,
      Status: 'active',
    },
  ];
  onClick(service: Service) {
    this.bookingService.addService(service);
  }
  ngOnInit(): void {
    this.getBooking$ = this.bookingService.getBookingData();
  }
}
