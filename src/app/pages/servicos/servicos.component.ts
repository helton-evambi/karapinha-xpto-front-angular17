import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ServicesContentComponent } from '../../components/services-content/services-content.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-servicos',
  standalone: true,
  imports: [HeaderComponent, ServicesContentComponent, FooterComponent],
  templateUrl: './servicos.component.html',
  styleUrl: './servicos.component.scss',
})
export class ServicosComponent {}
