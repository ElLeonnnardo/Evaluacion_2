import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LeerQrComponent } from './leer-qr/leer-qr.component';
import { RegistroClaseComponent } from './registro-clase/registro-clase.component';
import { PasswordResetPage } from './password-reset/password-reset.page';
import { RutaProtegidaComponent } from './ruta-protegida/ruta-protegida.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule) },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'password-reset', component: PasswordResetPage },
/*   { path: 'leer-qr', component: LeerQrComponent, canActivate: [AuthGuard] },
  { path: 'registro-clase', component: RegistroClaseComponent, canActivate: [AuthGuard] },
  { path: 'ruta-protegida', component: RutaProtegidaComponent, canActivate: [AuthGuard] }, */
  {
    path: 'leer-qr',
    loadChildren: () => import('./leer-qr/leer-qr.module').then( m => m.LeerQRPageModule)
  },
  {
    path: 'registro-clase',
    loadChildren: () => import('./registro-clase/registro-clase.module').then( m => m.RegistroClasePageModule)
  },
  {
    path: 'password-reset',
    loadChildren: () => import('./password-reset/password-reset.module').then( m => m.PasswordResetPageModule)
  },
  {
    path: 'ruta-protegida',
    canActivate: [AuthGuard],
    loadChildren: () => import('./ruta-protegida/ruta-protegida.module').then(m => m.RutaProtegidaPageModule),
  },
  {
    path: 'ruta-protegida',
    loadChildren: () => import('./ruta-protegida/ruta-protegida.module').then( m => m.RutaProtegidaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

