import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/auth/interfaces/user.interface';

export const onChecking = createAction('[Auth] Checking');

export const login = createAction(
  '[Auth] Login',
  props<{ email: string; password: string }>()
);

  
  export const loginSuccess = createAction(
    '[Auth] Login Success',
    props<{ user: User }>()
  );
  
  export const loginFailure = createAction(
    '[Auth] Login Failure',
    props<{ error: string }>()
  );
export const onLogout = createAction(
  '[Auth] Logout',
  props<{ errorMessage?: string }>()
);

export const checkAuthStatus = createAction(
  '[Auth] Checking Status'
)

export const clearErrorMessage = createAction('[Auth] Clear Error Message');
