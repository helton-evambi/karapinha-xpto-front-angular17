import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { ChooseServiceComponent } from './pages/choose-service/choose-service.component';
import { ChooseProfessionalComponent } from './pages/choose-professional/choose-professional.component';
import { ChooseTimeComponent } from './pages/choose-time/choose-time.component';
import { ConfirmBookingComponent } from './pages/confirm-booking/confirm-booking.component';
import { AdminDashboardComponent } from './pages/dashboard/admin/admin-dashboard/admin-dashboard.component';
import { ManageAdministrativeComponent } from './pages/dashboard/admin/manage-administrative/manage-administrative.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
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
    path: 'admin/dashboard',
    component: AdminDashboardComponent,
  },
  {
    path: 'admin/manage-administrative',
    component: ManageAdministrativeComponent,
  },
];
