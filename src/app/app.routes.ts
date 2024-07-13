import { Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { InicioComponent } from './core/components/inicio/inicio.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'login', component: LoginComponent },
  { path: 'user', component: LoginComponent }
];
