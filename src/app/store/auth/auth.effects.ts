import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { login, loginSuccess, loginFailure, checkAuthStatus, onLogout } from './auth.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { authService } from 'src/app/auth/services/auth.service';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private auth: authService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap(({ email, password }) =>
        this.auth.login({ email, password }).pipe(
          map((resp: any) => {
            localStorage.setItem('token', resp.usuario.token);
            localStorage.setItem('user', JSON.stringify(resp.usuario)); // si lo usas
  
            return loginSuccess({ user: resp.usuario });
          }),
          catchError(error =>
            of(loginFailure({ error: error.error.message || 'Login error' }))
          )
        )
      )
    )
  );
  
  
  
  checkAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(checkAuthStatus),
      map(() => {
        const token = localStorage.getItem('token');
        const userRaw = localStorage.getItem('user');

        if (token && userRaw) {
          const user = JSON.parse(userRaw);
          return loginSuccess({ user }); // recuperas user del localStorage
        }

        return onLogout({ errorMessage: 'No session' });
      })
    )
  );
  
}
