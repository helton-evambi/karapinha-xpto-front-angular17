import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicosComponent } from './pages/servicos/servicos.component';
import { BookingComponent } from './pages/booking/booking.component';
import { ChooseServiceComponent } from './pages/choose-service/choose-service.component';

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
];
