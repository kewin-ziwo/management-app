import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./template/template.route').then(m => m.TEMPLATE_ROUTES),
  }
];