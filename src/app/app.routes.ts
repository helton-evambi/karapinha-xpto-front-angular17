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
import { EditProfileComponent } from './pages/dashboard/administrative/edit-profile/edit-profile.component';
import { UserEditProfileComponent } from './pages/user-profile/user-edit-profile/user-edit-profile.component';
import { UserListBookingComponent } from './pages/user-profile/user-list-booking/user-list-booking.component';
import { UserManageBookingComponent } from './pages/user-profile/user-manage-booking/user-manage-booking.component';
import { AdministartiveDashboardComponent } from './pages/dashboard/administrative/administartive-dashboard/administartive-dashboard.component';
import {
  AuthGuard,
  AuthGuardAdministrative,
} from './services/auth-guard.service';
import { ManageBookingComponent } from './pages/dashboard/administrative/manage-booking/manage-booking.component';
import { MonthlyScheduleComponent } from './pages/dashboard/administrative/monthly-schedule/monthly-schedule.component';

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
    canActivate: [AuthGuard],
    data: { requiredRole: 'user' },
  },
  {
    path: 'booking/choose-profissional',
    component: ChooseProfessionalComponent,
    canActivate: [AuthGuard],
    data: { requiredRole: 'user' },
  },
  {
    path: 'booking/choose-time',
    component: ChooseTimeComponent,
    canActivate: [AuthGuard],
    data: { requiredRole: 'user' },
  },
  {
    path: 'booking/confirm',
    component: ConfirmBookingComponent,
    canActivate: [AuthGuard],
    data: { requiredRole: 'user' },
  },
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    data: { requiredRole: 'admin' },
  },
  {
    path: 'manage-administrative',
    component: ManageAdministrativeComponent,
    canActivate: [AuthGuard],
    data: { requiredRole: 'admin' },
  },
  {
    path: 'administrative/register',
    component: RegisterAdministrativeComponent,
    canActivate: [AuthGuard],
    data: { requiredRole: 'admin' },
  },
  {
    path: 'administrative/list',
    component: ListAdministativeComponent,
    canActivate: [AuthGuard],
    data: { requiredRole: 'admin' },
  },
  {
    path: 'user/list',
    component: ListUserComponent,
    canActivate: [AuthGuard],
    data: { requiredRole: 'admin' },
  },
  {
    path: 'administrative/dashboard',
    component: AdministartiveDashboardComponent,
    canActivate: [AuthGuard],
    data: { requiredRole: 'administrative' },
  },
  {
    path: 'administative/booking/list',
    component: ListBookingComponent,
    canActivate: [AuthGuard],
    data: { requiredRole: 'administrative' },
  },
  {
    path: 'category/list',
    component: ListCategoryComponent,
    canActivate: [AuthGuard],
    data: { requiredRole: 'administrative' },
  },
  {
    path: 'professional/list',
    component: ListProfessionalComponent,
    canActivate: [AuthGuard],
    data: { requiredRole: 'administrative' },
  },
  {
    path: 'service/list',
    component: ListServiceComponent,
    canActivate: [AuthGuard],
    data: { requiredRole: 'administrative' },
  },
  {
    path: 'manage-booking',
    component: ManageBookingComponent,
    canActivate: [AuthGuard],
    data: { requiredRole: 'administrative' },
  },
  {
    path: 'manage-category',
    component: ManageCategoryComponent,
    canActivate: [AuthGuard],
    data: { requiredRole: 'administrative' },
  },
  {
    path: 'monthly-schedule',
    component: MonthlyScheduleComponent,
    canActivate: [AuthGuard],
    data: { requiredRole: 'administrative' },
  },
  {
    path: 'manage-professional',
    component: ManageProfessionalComponent,
    canActivate: [AuthGuard],
    data: { requiredRole: 'administrative' },
  },
  {
    path: 'manage-service',
    component: ManageServiceComponent,
    canActivate: [AuthGuard],
    data: { requiredRole: 'administrative' },
  },
  {
    path: 'category/register',
    component: RegisterCategoryComponent,
    canActivate: [AuthGuard],
    data: { requiredRole: 'administrative' },
  },
  {
    path: 'professional/register',
    component: RegisterProfessionalComponent,
    canActivate: [AuthGuard],
    data: { requiredRole: 'administrative' },
  },
  {
    path: 'service/register',
    component: RegisterServiceComponent,
    canActivate: [AuthGuard],
    data: { requiredRole: 'administrative' },
  },
  {
    path: 'administrative/edit-profile',
    component: EditProfileComponent,
    canActivate: [AuthGuardAdministrative],
  },
  {
    path: 'user/edit-profile',
    component: UserEditProfileComponent,
    canActivate: [AuthGuard],
    data: { requiredRole: 'user' },
  },
  {
    path: 'user/list-booking',
    component: UserListBookingComponent,
    canActivate: [AuthGuard],
    data: { requiredRole: 'user' },
  },
  {
    path: 'user/manage-booking',
    component: UserManageBookingComponent,
    canActivate: [AuthGuard],
    data: { requiredRole: 'user' },
  },
];
