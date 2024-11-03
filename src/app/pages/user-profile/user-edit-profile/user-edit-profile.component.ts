import { ChangeDetectorRef, Component, inject } from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ToastrService } from 'ngx-toastr';
import { ButtonComponent } from '../../../components/button/button.component';
import { MenuItensComponent } from '../../../components/dashboard/menu-itens/menu-itens.component';
import { PrimaryInputComponent } from '../../../components/primary-input/primary-input.component';
import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';
import { DashboardContainerComponent } from '../../dashboard/dashboard-container/dashboard-container.component';
import { ionPersonCircle } from '@ng-icons/ionicons';
import { matBookmarks } from '@ng-icons/material-icons/baseline';

interface RegisterForm {
  FirstName: FormControl;
  LastName: FormControl;
  EmailAddress: FormControl;
  PhoneNumber: FormControl;
  Username: FormControl;
  IdCard: FormControl;
  Password: FormControl;
  ConfirmPassword: FormControl;
}

@Component({
  selector: 'app-user-edit-profile',
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
      ionPersonCircle,
      matBookmarks,
    }),
  ],

  templateUrl: './user-edit-profile.component.html',
  styleUrl: './user-edit-profile.component.scss',
})
export class UserEditProfileComponent {
  updateForm!: FormGroup;
  private toastr = inject(ToastrService);
  private userService = inject(UserService);
  userData!: User;
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.createForm();
    this.loadUserData();
  }

  createForm(): void {
    this.updateForm = new FormGroup<RegisterForm>({
      FirstName: new FormControl('', [Validators.required]),
      LastName: new FormControl('', [Validators.required]),
      EmailAddress: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      Username: new FormControl('', [Validators.required]),
      IdCard: new FormControl('', [Validators.required]),
      PhoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9),
      ]),
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      ConfirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  loadUserData(): void {
    this.userService
      .getUserById(Number(sessionStorage.getItem('id')))
      .subscribe({
        next: (userData) => {
          this.updateForm.patchValue(userData);
          console.log('Form after patch:', this.updateForm.value);
          this.cdr.detectChanges();
        },
        error: (err) => console.error(err),
      });
  }

  onSubmit() {
    if (this.updateForm.valid) {
      this.userService
        .updateUser(Number(sessionStorage.getItem('id')), this.updateForm.value)
        .subscribe({
          next: () => this.toastr.success('Actualizacao efetuado com sucesso'),
          error: (errorMessage) =>
            this.toastr.error('Ocorreu um erro ao actualizar os dados'),
        });
    } else {
      this.toastr.error('Prenncha todos compos corretamente');
    }
  }
}
