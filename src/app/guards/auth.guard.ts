import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, Route, UrlSegment } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/store/auth/auth.selector';
import { map, take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanLoad {
    constructor(private store: Store, private router: Router) {}

    private checkAuth() {
        return this.store.select(selectUser).pipe(
            take(1),
            map(user => {
                if (user && user.id) {
                    return true;
                } else {
                    this.router.navigate(['/auth/login']);
                    return false;
                }
            })
        );
    }

    canActivate() {
        return this.checkAuth();
    }

    canLoad(route: Route, segments: UrlSegment[]) {
        return this.checkAuth();
    }
}
