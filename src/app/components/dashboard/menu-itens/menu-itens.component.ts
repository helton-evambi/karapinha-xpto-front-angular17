import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-itens',
  standalone: true,
  imports: [],
  templateUrl: './menu-itens.component.html',
  styleUrl: './menu-itens.component.scss',
})
export class MenuItensComponent {
  @Input() menuName: string = '';
}
