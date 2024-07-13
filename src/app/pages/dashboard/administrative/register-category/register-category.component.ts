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
import { CategoryService } from '../../../../services/category.service';
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
}

@Component({
  selector: 'app-register-category',
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
  templateUrl: './register-category.component.html',
  styleUrl: './register-category.component.scss',
})
export class RegisterCategoryComponent {
  registerForm!: FormGroup<RegisterForm>;

  fileName: string = '';

  private toastr = inject(ToastrService);
  private categoryService = inject(CategoryService);

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      Description: new FormControl('', [Validators.required]),
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
      formData.append('Imagem', this.registerForm.value.Imagem);

      this.categoryService.createCategory(formData).subscribe({
        next: () => this.toastr.success('Cadastro efetuado com sucesso'),
        error: (errorMessage) =>
          this.toastr.error('Ocorreu um erro ao fazer o cadastro'),
      });
      console.log(this.registerForm.value);
    } else {
      this.toastr.error('Preencha todos campos corretamente');
    }
  }
}
