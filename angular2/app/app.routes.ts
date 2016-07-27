import { provideRouter, RouterConfig }  from '@angular/router';
import { HeroesRoutes } from '../app/views/heroes/app-heroes.routes';
import { DashboardRoutes } from '../app/dashboard/dashboard.routes';

const routes: RouterConfig = [
  ...DashboardRoutes,
  ...HeroesRoutes
];

export const appRouterProviders = [
  provideRouter(routes)
];
