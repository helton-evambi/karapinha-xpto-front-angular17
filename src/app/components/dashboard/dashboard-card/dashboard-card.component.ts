import { Component, Input } from '@angular/core';
type Page = 'dashboard' | 'manage';

@Component({
  selector: 'app-dashboard-card',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.scss',
})
export class DashboardCardComponent {
  @Input() titlte: string = '';
  @Input() value: number = 0;
  @Input() page: Page = 'dashboard';
}
