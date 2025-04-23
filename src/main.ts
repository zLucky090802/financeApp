import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { MetaReducer, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { AuthEffects } from './app/store/auth/auth.effects';
import { provideHttpClient } from '@angular/common/http';
import { authReducer } from './app/store/auth/auth.reducer';
import { localStorageSync } from 'ngrx-store-localstorage';
import { sanitizeLoginMetaReducer } from './app/store/meta-reducers/sanitize-login.metareducer';


export function localStorageSyncReducer(reducer: any): any {
  return localStorageSync({
    keys: ['auth'], // nombre del slice a persistir
    rehydrate: true,
  })(reducer);
}

const metaReducers: MetaReducer[] = [localStorageSyncReducer, sanitizeLoginMetaReducer];

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideStore({ auth: authReducer }, { metaReducers }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(AuthEffects),
    provideHttpClient()
],
});

