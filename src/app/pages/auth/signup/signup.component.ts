import { Component, inject } from '@angular/core';
import { PrimaryInputComponent } from '../../../components/primary-input/primary-input.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  matAlternateEmail,
  matKey,
  matPermIdentity,
  matPersonAddAlt1,
  matPersonSearch,
  matPhone,
  matPhoto,
} from '@ng-icons/material-icons/baseline';
import { ionCard, ionPersonCircleSharp } from '@ng-icons/ionicons';
import { RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';

interface RegisterForm {
  FirstName: FormControl;
  LastName: FormControl;
  EmailAddress: FormControl;
  PhoneNumber: FormControl;
  Username: FormControl;
  PhotoUrl: FormControl;
  IdCard: FormControl;
  Password: FormControl;
  ConfirmPassword: FormControl;
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    PrimaryInputComponent,
    ButtonComponent,
    NgIconComponent,
    ReactiveFormsModule,
    RouterLink,
    CommonModule,
  ],
  providers: [AuthService],
  viewProviders: [
    provideIcons({
      ionPersonCircleSharp,
      ionCard,
      matKey,
      matAlternateEmail,
      matPersonAddAlt1,
      matPersonSearch,
      matPermIdentity,
      matPhone,
      matPhoto,
    }),
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  registerForm!: FormGroup<RegisterForm>;
  private toastr = inject(ToastrService);
  private authService = inject(AuthService);

  constructor() {
    this.registerForm = new FormGroup({
      FirstName: new FormControl('', [Validators.required]),
      LastName: new FormControl('', [Validators.required]),
      EmailAddress: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      Username: new FormControl('', [Validators.required]),
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      PhotoUrl: new FormControl(null),
      IdCard: new FormControl('', [Validators.required]),
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

  get firstName() {
    return this.registerForm.get('FirstName');
  }
  get skill() {
    return this.registerForm.get('skill');
  }

  fileName: string = '';

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.fileName = file.name;
      this.registerForm.get('PhotoUrl')?.setValue(file);
    } else {
      this.fileName = '';
    }
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formData = new FormData();
      formData.append('FirstName', this.registerForm.get('FirstName')?.value);
      formData.append('LastName', this.registerForm.get('LastName')?.value);
      formData.append('Email', this.registerForm.get('EmailAddress')?.value);
      formData.append('Username', this.registerForm.get('Username')?.value);
      formData.append('Password', this.registerForm.get('Password')?.value);
      formData.append(
        'ConfirmPassword',
        this.registerForm.get('ConfirmPassword')?.value
      );
      formData.append(
        'PhoneNumber',
        this.registerForm.get('PhoneNumber')?.value
      );
      formData.append('IdCard', this.registerForm.get('IdCard')?.value);
      formData.append('PhotoUrl', this.registerForm.get('PhotoUrl')?.value);

      console.log(this.registerForm.value);
      this.authService.register(formData).subscribe({
        next: () => this.toastr.success('Cadastro efetuado com sucesso'),
        // error: (errorMessage) => this.toastr.error(errorMessage),
      });
    } else {
      this.toastr.error('Prenncha o Primeiro nome');
    }
  }
}
