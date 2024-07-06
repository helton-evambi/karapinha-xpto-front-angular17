import { Component, inject, Input, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ServicesContentComponent } from '../../components/services-content/services-content.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ServiceService } from '../../services/service.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { Service } from '../../models/service.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [
    HeaderComponent,
    ServicesContentComponent,
    FooterComponent,
    AsyncPipe,
    NgIf,
    RouterLink,
  ],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.scss',
})
export class ServicosComponent implements OnInit {
  private serviceService = inject(ServiceService);
  services$!: Observable<Service[]>;
  ngOnInit(): void {
    this.services$ = this.serviceService.getServices();
  }
}
