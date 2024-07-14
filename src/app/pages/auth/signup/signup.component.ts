import { Component, OnInit, inject } from '@angular/core';
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
import { Router, RouterLink } from '@angular/router';
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
export class SignupComponent implements OnInit {
  fileName: string = '';
  registerForm!: FormGroup<RegisterForm>;
  private toastr = inject(ToastrService);
  private authService = inject(AuthService);
  private route = inject(Router);

  ngOnInit(): void {
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
      if (
        this.registerForm.value.Password ===
        this.registerForm.value.ConfirmPassword
      ) {
        const formData = new FormData();
        formData.append('FirstName', this.registerForm.value.FirstName);
        formData.append('LastName', this.registerForm.value.LastName);
        formData.append('EmailAddress', this.registerForm.value.EmailAddress);
        formData.append('Username', this.registerForm.value.Username);
        formData.append('Password', this.registerForm.value.Password);
        formData.append(
          'ConfirmPassword',
          this.registerForm.value.ConfirmPassword
        );
        formData.append('PhoneNumber', this.registerForm.value.PhoneNumber);
        formData.append('IdCard', this.registerForm.value.IdCard);
        formData.append('PhotoUrl', this.registerForm.value.PhotoUrl);
        formData.append('Role', 'user');

        this.authService.register(formData).subscribe({
          next: () => {
            this.toastr.success('Cadastro efetuado com sucesso');
            this.route.navigate(['/login']);
          },
          error: (errorMessage) => this.toastr.error(String(errorMessage)),
        });
      } else {
        this.toastr.error('As password não coencidem');
      }
    } else {
      this.toastr.error('Prenncha todos campos corretamente');
    }
  }
}
