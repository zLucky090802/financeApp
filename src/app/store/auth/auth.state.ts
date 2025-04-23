// src/app/store/auth/auth.state.ts

import { AuthState } from '../interfaces/auth-state-interface';

export const initialAuthState: AuthState = {
  status: 'not-authenticated',
  user: null,
  loading: false,
  error: null,
};
