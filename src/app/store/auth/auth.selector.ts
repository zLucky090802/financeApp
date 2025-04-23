import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../interfaces/auth-state-interface';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state) => state.status === 'authenticated'
);

export const selectErrorMessage = createSelector(
  selectAuthState,
  (state) => state.error
);


