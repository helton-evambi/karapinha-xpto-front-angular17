import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionCheckmark } from '@ng-icons/ionicons';

@Component({
  selector: 'app-card-package',
  standalone: true,
  imports: [ButtonComponent, NgIconComponent],
  viewProviders: [provideIcons({ ionCheckmark })],
  templateUrl: './card-package.component.html',
  styleUrl: './card-package.component.scss',
})
export class CardPackageComponent {
  @Input() image: string = '';
  @Input() packegeTitle: string = '';
  @Input() price: string = '';
  @Input() packegeText: string = '';
  @Input() packegeItems: string[] = [];
}
