import { Routes } from '@angular/router';
import { Login } from './auth/components/login/login';
import { Signup } from './auth/components/signup/signup';
import { authGuard } from './auth/guard/auth-guard';

export const routes: Routes = [
    {path:"login", component: Login},
    {path:"inscription", component: Signup},
    {path:"admin", canActivate:[authGuard], loadChildren:()=>import("./modules/admin/admin-module").then(e=>e.AdminModule)},
    {path:"client", canActivate:[authGuard], loadChildren:()=>import("./modules/client/client-module").then(e=>e.ClientModule)},

    { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];


