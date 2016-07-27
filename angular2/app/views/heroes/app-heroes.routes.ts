import { RouterConfig }  from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

export const HeroesRoutes: RouterConfig = [
  {
    path: 'heroes',
    component: HeroesComponent
  },{
    path: 'detail/:id',
    component: HeroDetailComponent
  }
];