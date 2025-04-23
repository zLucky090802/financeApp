import { ActionReducer, Action } from '@ngrx/store';

export function sanitizeLoginMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action: Action) {

    if (action.type === '[Auth] Login') {
      const loginAction = action as any; // o definir tu tipo si quieres ser más estricto

      if (loginAction.user && loginAction.user.password) {
        const sanitizedUser = { ...loginAction.user };
        delete sanitizedUser.password;

        action = {
          ...loginAction,
          user: sanitizedUser
        };
      }
    }

    return reducer(state, action);
  };
}
