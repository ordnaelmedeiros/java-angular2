import { RouterConfig }  from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

export const HeroesRoutes2: RouterConfig = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },{
    path: 'heroes',
    component: HeroesComponent
  },{
    path: 'detail/:id',
    component: HeroDetailComponent
  }
];