import { Routes } from '@angular/router';

import { financeRoutes } from './finance/finance.routes';
import { statisticsRoutes } from './statistics/statistics.routes';



export const routes: Routes = [
  {
   path:'finance',
   children:financeRoutes
  },
  {
    path: 'statistics',
    children: statisticsRoutes
  },
  {
    path:'**',
    redirectTo:'finance'
  },
 

  
];
