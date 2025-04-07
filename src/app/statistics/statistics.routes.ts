import { Routes } from '@angular/router';

export const statisticsRoutes: Routes = [
    {
      path: '',
      loadComponent: () => import('../statistics/layout/statistics-layout/statistics-layout.page')
        .then(m => m.StatisticsLayoutPage),
      children: [
        { path: 'all', loadComponent: () => import('../statistics/pages/all-movements/all-movements.page').then(m => m.AllMovementsPage) },
        { path: 'income', loadComponent: () => import('../statistics/pages/income-movements/income-movements.page').then(m => m.IncomeMovementsPage) },
        { path: 'expenses', loadComponent: () => import('../statistics/pages/expenses-movements/expenses-movements.page').then(m => m.ExpensesMovementsPage) },
        { path: '', redirectTo: 'all', pathMatch: 'full' },
      ],
    },
    { path: '**', redirectTo: '' },
  ];
  