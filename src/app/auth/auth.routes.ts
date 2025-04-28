import { Routes } from '@angular/router';
import { LoginGuard } from '../guards/login.guard';



export const authRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/auth-layout/auth-layout.component').then(m => m.AuthLayoutComponent),
    canActivate:[LoginGuard],
    children: [
        {
            path:'login',
            loadComponent: ()=> import('./pages/login-page/login-page.component').then(m => m.LoginPageComponent),

           
        },
        {
            path:'register',
            loadComponent: ()=> import('./pages/register-page/register-page.component').then(m => m.RegisterPageComponent),
            
        },
        {
            path:'',
            redirectTo: 'login',
            pathMatch:'full',
        },
     
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
