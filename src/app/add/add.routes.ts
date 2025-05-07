import { Routes } from '@angular/router';

import { AuthGuard } from '../guards/auth.guard';


export const addRoutes: Routes = [
  {
    path: '',
    loadComponent: ()=> import('./layout/add-layout/add-layout.component').then(m => m.AddLayoutComponent),
    canActivate:[AuthGuard],
    
    children: [
     {
        path: 'movements-form',
        loadComponent: () => import('./components/movements-form/movements-form.component').then(m => m.MovementsFormComponent)
     },
     {
        path: 'accounts-form',
        loadComponent: () => import('./components/accounts-form/accounts-form.component').then(m => m.AccountsFormComponent)
     },
     {
        path: 'categorys-form',
        loadComponent: () => import('./components/category-form/category-form.component').then(m => m.CategoryFormComponent)
     },
     {
        path:'options',
        loadComponent: () => import('./pages/add-page/add-page.component').then(m => m.AddPageComponent),
     },
     {
        path: '',
        redirectTo: 'options',
        pathMatch: 'full',
     }

    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
