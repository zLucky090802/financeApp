import { User } from "src/app/auth/interfaces/user.interface";

export type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';



export interface AuthState {
    status: AuthStatus;
    user: User | null;
    loading: boolean;
    error: string | null;
  }