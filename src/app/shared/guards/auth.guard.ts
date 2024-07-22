import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';


export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);

  return authService.isLogged().pipe(
    map(isAuthenticated => {
      if (!isAuthenticated) {
        return false;
      }
      return true;
    })
  );

};
