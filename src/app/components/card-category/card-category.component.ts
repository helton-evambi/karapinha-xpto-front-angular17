import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-card-category',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './card-category.component.html',
  styleUrl: './card-category.component.scss',
})
export class CardCategoryComponent {
  @Input() cardImage: string = '';
  @Input() cardTitle: string = '';
  @Input() cardText: string = '';
}
