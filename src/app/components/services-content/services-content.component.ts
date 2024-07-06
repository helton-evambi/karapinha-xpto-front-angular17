import { Component, inject, input, Input, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Router, RouterLink } from '@angular/router';
import { Booking } from '../../models/booking.model';
import { Observable } from 'rxjs';
import { BookingService } from '../../services/booking.service';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-services-content',
  standalone: true,
  imports: [ButtonComponent, RouterLink],
  templateUrl: './services-content.component.html',
  styleUrls: ['./services-content.component.scss'],
})
export class ServicesContentComponent implements OnInit {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() price: number = 0;
  @Input() service!: Service;
  @Input() index: number = 0;

  private route = inject(Router);
  private bookingService = inject(BookingService);

  reverse!: boolean;

  ngOnInit(): void {
    this.reverse = this.index % 2 !== 0;
  }
  addService(service: Service) {
    this.bookingService.addService(service);
    this.route.navigate(['booking/choose-service']);
  }
}
