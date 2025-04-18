import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';


export const financeRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout-pages/layout-pages.page').then(m => m.LayoutPagesPage),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage),
      },
    
      {
        path: 'accounts',
        loadComponent: () => import('./pages/accounts/accounts.page').then(m => m.AccountsPage),
      },
      {
        path: 'more-settings',
        loadComponent: () => import('./pages/more-settings/more-settings.page').then(m => m.MoreSettingsPage),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
