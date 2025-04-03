import { Routes } from '@angular/router';

import { financeRoutes } from './finance/finance.routes';

export const routes: Routes = [
  {
   path:'finance',
   children:financeRoutes
  },
  {
    path:'**',
    redirectTo:'finance'
  }

  
];
