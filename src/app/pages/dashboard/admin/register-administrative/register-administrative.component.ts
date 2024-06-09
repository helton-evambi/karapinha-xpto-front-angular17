import { Component } from '@angular/core';
import { DashboardContainerComponent } from '../../dashboard-container/dashboard-container.component';
import { MenuItensComponent } from '../../../../components/dashboard/menu-itens/menu-itens.component';
import {
  ionBarChart,
  ionPerson,
  ionPeople,
  ionPersonCircleSharp,
} from '@ng-icons/ionicons';
import {
  matPersonAddAlt1,
  matPersonSearch,
  matPermIdentity,
  matAlternateEmail,
  matPhone,
  matPhoto,
  matKey,
} from '@ng-icons/material-icons/baseline';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { RouterLink } from '@angular/router';
import { PrimaryInputComponent } from '../../../../components/primary-input/primary-input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../../../components/button/button.component';

interface RegisterForm {
  FirstName: FormControl;
  LastName: FormControl;
  Email: FormControl;
  PhoneNumber: FormControl;
  UserName: FormControl;
  Password: FormControl;
  ConfirmPassword: FormControl;
}

@Component({
  selector: 'app-register-administrative',
  standalone: true,
  imports: [
    DashboardContainerComponent,
    MenuItensComponent,
    NgIconComponent,
    PrimaryInputComponent,
    ReactiveFormsModule,
    ButtonComponent,
    RouterLink,
  ],
  viewProviders: [
    provideIcons({
      ionBarChart,
      ionPerson,
      ionPeople,
      ionPersonCircleSharp,
      matPersonAddAlt1,
      matPersonSearch,
      matPermIdentity,
      matAlternateEmail,
      matPhone,
      matPhoto,
      matKey,
    }),
  ],
  templateUrl: './register-administrative.component.html',
  styleUrl: './register-administrative.component.scss',
})
export class RegisterAdministrativeComponent {
  registerForm!: FormGroup<RegisterForm>;

  constructor() {
    this.registerForm = new FormGroup({
      FirstName: new FormControl('', [Validators.required]),
      LastName: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      UserName: new FormControl('', [Validators.required]),
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      ConfirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      PhoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9),
      ]),
    });
  }

  onSubmit() {
    console.log(this.registerForm.value);
    console.log('ola');
  }
}
