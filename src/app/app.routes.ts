import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { ChooseServiceComponent } from './pages/choose-service/choose-service.component';
import { ChooseProfessionalComponent } from './pages/choose-professional/choose-professional.component';
import { ChooseTimeComponent } from './pages/choose-time/choose-time.component';
import { ConfirmBookingComponent } from './pages/confirm-booking/confirm-booking.component';
import { AdminDashboardComponent } from './pages/dashboard/admin/admin-dashboard/admin-dashboard.component';
import { ManageAdministrativeComponent } from './pages/dashboard/admin/manage-administrative/manage-administrative.component';
import { RegisterAdministrativeComponent } from './pages/dashboard/admin/register-administrative/register-administrative.component';
import { ListAdministativeComponent } from './pages/dashboard/admin/list-administative/list-administative.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { ListUserComponent } from './pages/dashboard/admin/list-user/list-user.component';
import { ListBookingComponent } from './pages/dashboard/administrative/list-booking/list-booking.component';
import { ListCategoryComponent } from './pages/dashboard/administrative/list-category/list-category.component';
import { ListProfessionalComponent } from './pages/dashboard/administrative/list-professional/list-professional.component';
import { ListServiceComponent } from './pages/dashboard/administrative/list-service/list-service.component';
import { ManageCategoryComponent } from './pages/dashboard/administrative/manage-category/manage-category.component';
import { ManageProfessionalComponent } from './pages/dashboard/administrative/manage-professional/manage-professional.component';
import { ManageServiceComponent } from './pages/dashboard/administrative/manage-service/manage-service.component';
import { RegisterCategoryComponent } from './pages/dashboard/administrative/register-category/register-category.component';
import { RegisterProfessionalComponent } from './pages/dashboard/administrative/register-professional/register-professional.component';
import { RegisterServiceComponent } from './pages/dashboard/administrative/register-service/register-service.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'servicos',
    component: ServicosComponent,
  },
  {
    path: 'booking/choose-service',
    component: ChooseServiceComponent,
  },
  {
    path: 'booking/choose-profissional',
    component: ChooseProfessionalComponent,
  },
  {
    path: 'booking/choose-time',
    component: ChooseTimeComponent,
  },
  {
    path: 'booking/confirm',
    component: ConfirmBookingComponent,
  },
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
  },
  {
    path: 'manage-administrative',
    component: ManageAdministrativeComponent,
  },
  {
    path: 'administrative/register',
    component: RegisterAdministrativeComponent,
  },
  {
    path: 'administrative/list',
    component: ListAdministativeComponent,
  },
  {
    path: 'user/list',
    component: ListUserComponent,
  },
  {
    path: 'administative/booking/list',
    component: ListBookingComponent,
  },
  {
    path: 'category/list',
    component: ListCategoryComponent,
  },
  {
    path: 'professional/list',
    component: ListProfessionalComponent,
  },
  {
    path: 'service/list',
    component: ListServiceComponent,
  },
  {
    path: 'manage-category',
    component: ManageCategoryComponent,
  },
  {
    path: 'manage-professional',
    component: ManageProfessionalComponent,
  },
  {
    path: 'manage-service',
    component: ManageServiceComponent,
  },
  {
    path: 'category/register',
    component: RegisterCategoryComponent,
  },
  {
    path: 'professional/register',
    component: RegisterProfessionalComponent,
  },
  {
    path: 'service/register',
    component: RegisterServiceComponent,
  },
];
