import { provideRouter, RouterConfig }  from '@angular/router';
import { DashboardRoutes } from '../app/dashboard/dashboard.routes';
import { HeroesRoutes } from '../app/views/heroes/app-heroes.routes';
import { DisciplinaRoutes } from '../app/views/disciplina/routes/disciplina.routes';

const routes: RouterConfig = [
  ...DashboardRoutes,
  ...DisciplinaRoutes,
  ...HeroesRoutes
];

export const appRouterProviders = [
  provideRouter(routes)
];
