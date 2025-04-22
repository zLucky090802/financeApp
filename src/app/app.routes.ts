import { Routes } from '@angular/router';

import { financeRoutes } from './finance/finance.routes';
import { statisticsRoutes } from './statistics/statistics.routes';
import { authRoutes } from './auth/auth.routes';

export const routes: Routes = [
  {
    path: 'finance',
    children: financeRoutes,
  },
  {
    path: 'statistics',
    children: statisticsRoutes,
  },
  {
    path: 'auth',
    children: authRoutes,
  },
  {
    path: '**',
    redirectTo: 'finance',
  },
];
