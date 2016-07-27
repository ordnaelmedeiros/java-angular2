import { RouterConfig }  from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const DashboardRoutes: RouterConfig = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },{
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];