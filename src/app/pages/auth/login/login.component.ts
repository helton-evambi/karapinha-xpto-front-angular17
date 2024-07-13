import { Component, Inject, OnInit, inject } from '@angular/core';
import { PrimaryInputComponent } from '../../../components/primary-input/primary-input.component';
import { ButtonComponent } from '../../../components/button/button.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { matKey, matAlternateEmail } from '@ng-icons/material-icons/baseline';
import { Router, RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../services/auth.service';

interface LoginForm {
  identifier: FormControl;
  password: FormControl;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    PrimaryInputComponent,
    ButtonComponent,
    NgIconComponent,
    ReactiveFormsModule,
    RouterLink,
  ],
  viewProviders: [
    provideIcons({
      matKey,
      matAlternateEmail,
    }),
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup<LoginForm>;
  private route = inject(Router);

  private toastr = inject(ToastrService);
  private authService = inject(AuthService);
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      identifier: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService
        .login(this.loginForm.value.identifier, this.loginForm.value.password)
        .subscribe({
          next: (value) => {
            sessionStorage.setItem('isLogged', 'true');
            sessionStorage.setItem('id', String(value.UserId));
            sessionStorage.setItem('username', value.Username);
            sessionStorage.setItem('role', value.Role);
            sessionStorage.setItem('status', value.Status);
            if (value.Status === 'pending') {
              if (value.Role === 'administrative') {
                this.toastr.warning('Precisa editar os seu dados de perfíl');
                this.route.navigate(['/administrative/edit-profile']);
              } else this.toastr.warning('A sua conta necessita de Ativação');
            } else {
              if (value.Role === 'user') this.route.navigate(['/']);

              if (value.Role === 'admin') this.route.navigate(['/dashboard']);

              if (value.Role === 'administrative')
                this.route.navigate(['/administrative/dashboard']);
            }
          },
          error: () =>
            this.toastr.error('Identificaçao ou Palavra passe inválida'),
        });
    } else {
      this.toastr.error('Preencha todos campos de forma correta!');
    }
  }
}
