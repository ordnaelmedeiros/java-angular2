import { provideRouter, RouterConfig }  from '@angular/router';
import { HeroesRoutes } from './app-heroes.routes';
import { HeroesRoutes2 } from './app-heroes.routes_2';

const routes: RouterConfig = [
  ...HeroesRoutes,
  ...HeroesRoutes2
];

export const appRouterProviders = [
  provideRouter(routes)
];
