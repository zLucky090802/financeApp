import { Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

export const statisticsRoutes: Routes = [
    {
      path: '',
      loadComponent: () => import('../statistics/layout/statistics-layout/statistics-layout.page')
        .then(m => m.StatisticsLayoutPage),
        canActivate:[AuthGuard],
        
      children: [
        {
          path: ':filter', loadComponent: () => import('../statistics/pages/movements-page/movements-page.page').then(m=>m.MovementsPagePage)
        },
        { path: '', redirectTo: 'all', pathMatch: 'full' },
      ],
    },
    { path: '**', redirectTo: '' },
  ];
  