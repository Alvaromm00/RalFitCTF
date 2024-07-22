import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ReviewsService } from './shared/services/reviews.service';
import {  provideHttpClient } from '@angular/common/http';
import { AuthService } from './shared/services/auth.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(),provideHttpClient(),ReviewsService,AuthService]
};
