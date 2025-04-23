import { createReducer, on } from '@ngrx/store';
import { initialAuthState } from './auth.state';
import { onChecking, login, onLogout, clearErrorMessage, loginSuccess } from './auth.actions';
import { AuthStatus } from '../interfaces/auth-state-interface';

export const authReducer = createReducer(
  initialAuthState,

  on(onChecking, (state) => ({
    ...state,
    status: <AuthStatus>'checking',
    user: <any>{},
    errorMessage: undefined
  })),

 

  on(loginSuccess, (state, { user }) => ({
    ...state,
    status: <AuthStatus>'authenticated',
    user, 
    errorMessage: undefined
  })),
  

  on(onLogout, (state, { errorMessage }) => ({
    ...state,
    status: <AuthStatus>'not-authenticated',
    user: <any> {},
    errorMessage
  })),

  on(clearErrorMessage, (state) => ({
    ...state,
    errorMessage: undefined
  }))
);
