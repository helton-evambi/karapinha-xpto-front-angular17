import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ButtonComponent } from '../../../../components/button/button.component';
import { MenuItensComponent } from '../../../../components/dashboard/menu-itens/menu-itens.component';
import { PrimaryInputComponent } from '../../../../components/primary-input/primary-input.component';
import { DashboardContainerComponent } from '../../dashboard-container/dashboard-container.component';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../../services/auth.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category } from '../../../../models/category.model';
import { CategoryService } from '../../../../services/category.service';
import { Time } from '../../../../models/time.model';
import { time } from 'console';
import { ProfessionalService } from '../../../../services/professional.service';
import { ModalComponent } from '../../../../components/modal/modal.component';
import { TimeService } from '../../../../services/time.service';
import {
  ionBarChart,
  ionPerson,
  ionPeople,
  ionTrendingUpSharp,
  ionTrendingDownSharp,
  ionCashOutline,
  ionArrowUp,
  ionArrowDown,
  ionDocumentAttach,
  ionDuplicateOutline,
} from '@ng-icons/ionicons';
import { matBookmarks } from '@ng-icons/material-icons/baseline';

interface RegisterForm {
  FirstName: FormControl;
  LastName: FormControl;
  EmailAddress: FormControl;
  PhoneNumber: FormControl;
  IdCard: FormControl;
  CategoryId: FormControl;
  PhotoUrl: FormControl;
}

@Component({
  selector: 'app-register-professional',
  standalone: true,
  imports: [
    DashboardContainerComponent,
    MenuItensComponent,
    NgIconComponent,
    PrimaryInputComponent,
    ReactiveFormsModule,
    ButtonComponent,
    RouterLink,
    AsyncPipe,
    NgIf,
    ModalComponent,
  ],
  viewProviders: [
    provideIcons({
      ionBarChart,
      ionPerson,
      ionPeople,
      ionTrendingUpSharp,
      ionTrendingDownSharp,
      ionCashOutline,
      ionArrowUp,
      ionArrowDown,
      ionDocumentAttach,
      ionDuplicateOutline,
      matBookmarks,
    }),
  ],
  templateUrl: './register-professional.component.html',
  styleUrl: './register-professional.component.scss',
})
export class RegisterProfessionalComponent {
  registerForm!: FormGroup<RegisterForm>;
  private toastr = inject(ToastrService);
  private professionalService = inject(ProfessionalService);
  private categoryService = inject(CategoryService);
  private timeService = inject(TimeService);

  categories$!: Observable<Category[]>;
  timeProfessional$!: Observable<Time[]>;
  private times: Time[] = [];

  time$ = new BehaviorSubject<Time[]>(this.times);

  time!: Time[];
  fileName: string = '';

  modalVisibility: boolean = false;

  openModal() {
    this.timeProfessional$ = this.timeService.getTimes();
    this.modalVisibility = true;
  }
  closeModal() {
    this.modalVisibility = false;
  }
  addTime(time: Time) {
    this.times.push(time);
    this.time$.next(this.times);
    this.closeModal();
  }
  ngOnInit(): void {
    this.categories$ = this.categoryService.getCategories();
    this.registerForm = new FormGroup({
      FirstName: new FormControl('', [Validators.required]),
      LastName: new FormControl('', [Validators.required]),
      EmailAddress: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),

      PhotoUrl: new FormControl(null),
      IdCard: new FormControl('', [Validators.required]),
      CategoryId: new FormControl('', [Validators.required]),
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
      this.time$.subscribe((value) => (this.time = value));
      const formData = new FormData();
      formData.append('FirstName', this.registerForm.value.FirstName);
      formData.append('LastName', this.registerForm.value.LastName);
      formData.append('EmailAddress', this.registerForm.value.EmailAddress);
      formData.append('PhoneNumber', this.registerForm.value.PhoneNumber);
      formData.append('IdCard', this.registerForm.value.IdCard);
      formData.append('PhotoUrl', this.registerForm.value.PhotoUrl);
      formData.append('CategoryId', this.registerForm.value.CategoryId);
      formData.append('Times', JSON.stringify(this.time));

      this.professionalService.createProfessioal(formData).subscribe({
        next: () => this.toastr.success('Cadastro efetuado com sucesso'),
        error: (errorMessage) =>
          this.toastr.error('Ocorreu um erro ao fazer o cadastro'),
      });
    } else {
      this.toastr.error('Preencha todos campos corretamente');
    }
  }
}
