import { Component } from '@angular/core';
import { PrimaryInputComponent } from '../../../components/primary-input/primary-input.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matKey, matAlternateEmail } from '@ng-icons/material-icons/baseline';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PrimaryInputComponent, ButtonComponent, NgIconComponent],
  viewProviders: [
    provideIcons({
      matKey,
      matAlternateEmail,
    }),
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
