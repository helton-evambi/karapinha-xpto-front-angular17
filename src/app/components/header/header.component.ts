import { Component, inject, OnInit } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { Router, RouterLink } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matLoginOutline } from '@ng-icons/material-icons/outline';
import { ionPersonCircleSharp } from '@ng-icons/ionicons';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    LogoComponent,
    ButtonComponent,
    RouterLink,
    NgIconComponent,
    NgIf,
    AsyncPipe,
  ],
  viewProviders: [
    provideIcons({
      matLoginOutline,
      ionPersonCircleSharp,
    }),
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  private authService = inject(AuthService);
  private route = inject(Router);
  private userService = inject(UserService);
  logged: boolean = this.authService.isLoggedIn();

  user$!: Observable<User>;

  ngOnInit(): void {
    if (this.logged) {
      this.user$ = this.userService.getUserById(
        Number(sessionStorage.getItem('id'))
      );
    }
  }

  navegate() {
    if (sessionStorage.getItem('role') === 'user') {
      this.route.navigate(['/user/edit-profile']);
    } else if (sessionStorage.getItem('role') === 'admin') {
      this.route.navigate(['/dashboard']);
    } else {
      this.route.navigate(['/administrative/dashboard']);
    }
  }
}
