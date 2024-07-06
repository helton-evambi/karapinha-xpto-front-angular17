import { Component, inject } from '@angular/core';
import { DashboardContainerComponent } from '../../dashboard-container/dashboard-container.component';
import { MenuItensComponent } from '../../../../components/dashboard/menu-itens/menu-itens.component';
import {
  ionBarChart,
  ionPerson,
  ionPeople,
  ionPersonCircleSharp,
  ionCard,
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
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../../services/user.service';
import { AuthService } from '../../../../services/auth.service';

interface RegisterForm {
  FirstName: FormControl;
  LastName: FormControl;
  EmailAddress: FormControl;
  PhoneNumber: FormControl;
  Username: FormControl;
  IdCard: FormControl;
  Password: FormControl;
  ConfirmPassword: FormControl;
  PhotoUrl: FormControl;
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
      ionCard,
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

  fileName: string = '';

  private toastr = inject(ToastrService);
  private authService = inject(AuthService);

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

  get firstName() {
    return this.registerForm.get('FirstName');
  }
  get skill() {
    return this.registerForm.get('skill');
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
      formData.append('Role', 'administrative');

      console.log(this.registerForm.value);

      this.authService.register(formData).subscribe({
        next: () => this.toastr.success('Cadastro efetuado com sucesso'),
        error: (errorMessage) =>
          this.toastr.error('Ocorreu um erro ao fazer o cadastro'),
      });
    } else {
      this.toastr.error('Prenncha todos compos corretamente');
    }
  }
}
