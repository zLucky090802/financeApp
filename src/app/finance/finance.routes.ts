import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { AuthGuard } from '../guards/auth.guard';


export const financeRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout-pages/layout-pages.page').then(m => m.LayoutPagesPage),
    canActivate:[AuthGuard],
    
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
        path: 'account-movements/:nombre/:id',
        loadComponent: () => import('./pages/account-movements-page/account-movements-page.component').then(m => m.AccountMovementsPageComponent)      
      },
      {
        path: 'more-settings',
        loadComponent: () => import('./pages/more-settings/more-settings.page').then(m => m.MoreSettingsPage),
      },
      {
        path:'categorias-ingresos',
        loadComponent: () => import('./pages/categorias-ingresos/categorias-ingresos.component').then(m=>m.CategoriasIngresosComponent),
      },
      {
        path:'categorias-gastos',
        loadComponent: () => import('./pages/categorias-gastos/categorias-gastos.component').then(m=>m.CategoriasGastosComponent),
      },
      {
        path:'gestor-cuentas',
        loadComponent: () => import('./pages/gestor-cuentas/gestor-cuentas.component').then(m=>m.GestorCuentasComponent),
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
