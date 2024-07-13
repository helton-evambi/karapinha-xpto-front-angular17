import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionSettingsSharp, ionLogOutOutline } from '@ng-icons/ionicons';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-dashboard-container',
  standalone: true,
  imports: [NgIconComponent, RouterLink],
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
  private authService = inject(AuthService);
  @Input() uesrName: string = '';
  @Input() userRole: String = '';
  @Input() pageTitle: string = '';

  logout() {
    this.authService.logout();
  }
}
