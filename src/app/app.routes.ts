import { Routes } from '@angular/router';

import { financeRoutes } from './finance/finance.routes';
import { statisticsRoutes } from './statistics/statistics.routes';
import { authRoutes } from './auth/auth.routes';
import { LoginGuard } from './guards/login.guard';
import { AuthGuard } from './guards/auth.guard';
import { addRoutes } from './add/add.routes';

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

    path:'add',
    children: addRoutes,
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
];
