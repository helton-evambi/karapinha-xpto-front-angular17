import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matLoginOutline } from '@ng-icons/material-icons/outline';
import { ionPersonCircleSharp } from '@ng-icons/ionicons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, ButtonComponent, RouterLink, NgIconComponent],
  viewProviders: [
    provideIcons({
      matLoginOutline,
      ionPersonCircleSharp,
    }),
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
