import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionSettingsSharp, ionLogOutOutline } from '@ng-icons/ionicons';

@Component({
  selector: 'app-dashboard-container',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [
    provideIcons({
      ionSettingsSharp,
      ionLogOutOutline,
    }),
  ],
  templateUrl: './dashboard-container.component.html',
  styleUrl: './dashboard-container.component.scss',
})
export class DashboardContainerComponent {
  @Input() uesrName: string = '';
  @Input() userRole: String = '';
  @Input() pageTitle: string = '';
}
