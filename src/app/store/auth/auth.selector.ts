import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../interfaces/auth-state-interface';
import { User } from 'src/app/auth/interfaces/user.interface';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state) => state.status === 'authenticated'
);

export const selectErrorMessage = createSelector(
  selectAuthState,
  (state) => state.error
);
export const selectUser = createSelector(
  selectAuthState,
  (state) => state.user
);



