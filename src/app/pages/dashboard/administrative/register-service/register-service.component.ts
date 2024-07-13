import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ServiceService } from '../../../../services/service.service';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ButtonComponent } from '../../../../components/button/button.component';
import { MenuItensComponent } from '../../../../components/dashboard/menu-itens/menu-itens.component';
import { PrimaryInputComponent } from '../../../../components/primary-input/primary-input.component';
import { DashboardContainerComponent } from '../../dashboard-container/dashboard-container.component';
import { CategoryService } from '../../../../services/category.service';
import { Observable } from 'rxjs';
import { Category } from '../../../../models/category.model';
import { AsyncPipe, NgIf } from '@angular/common';
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
  Name: FormControl;
  Description: FormControl;
  Imagem: FormControl;
  Price: FormControl;
  EstimatedTime: FormControl;
  CategoryId: FormControl;
}

@Component({
  selector: 'app-register-service',
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
  templateUrl: './register-service.component.html',
  styleUrl: './register-service.component.scss',
})
export class RegisterServiceComponent {
  registerForm!: FormGroup<RegisterForm>;

  fileName: string = '';

  private toastr = inject(ToastrService);
  private serviceService = inject(ServiceService);
  private categoryService = inject(CategoryService);
  categories$!: Observable<Category[]>;

  ngOnInit(): void {
    this.categories$ = this.categoryService.getCategories();
    this.registerForm = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      Description: new FormControl('', [Validators.required]),
      EstimatedTime: new FormControl('', [Validators.required]),
      Price: new FormControl('', [Validators.required]),
      CategoryId: new FormControl('', [Validators.required]),
      Imagem: new FormControl(null),
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.fileName = file.name;
      this.registerForm.get('Imagem')?.setValue(file);
    } else {
      this.fileName = '';
    }
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formData = new FormData();
      formData.append('Name', this.registerForm.value.Name);
      formData.append('Description', this.registerForm.value.Description);
      formData.append('Price', this.registerForm.value.Price);
      formData.append('EstimatedTime', this.registerForm.value.EstimatedTime);
      formData.append('Imagem', this.registerForm.value.Imagem);
      formData.append('CategoryId', this.registerForm.value.CategoryId);

      this.serviceService.createService(formData).subscribe({
        next: () => this.toastr.success('Registro efetuado com sucesso'),
        error: (errorMessage) =>
          this.toastr.error('Ocorreu um erro ao fazer o cadastro'),
      });
    } else {
      this.toastr.error('Preencha todos campos corretamente');
    }
  }
}
