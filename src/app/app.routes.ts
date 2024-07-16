import { Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { ReviewFormComponent } from './shared/components/review-form/review-form.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'login', component: LoginComponent },
  { path: 'user', component: LoginComponent },
  { path: 'opiniones', component: ReviewFormComponent}
];
