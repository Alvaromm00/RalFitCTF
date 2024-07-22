import { Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { ReviewFormComponent } from './shared/components/review-form/review-form.component';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'login', component: LoginComponent },
  { path: 'user', component: LoginComponent, canActivate: [authGuard] },
  { path: 'opiniones', component: ReviewFormComponent},
  { path: 'carousel', component: CarouselComponent},
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];
