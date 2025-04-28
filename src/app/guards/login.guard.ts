import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/store/auth/auth.selector';
import { User } from '../auth/interfaces/user.interface';
import { map } from 'rxjs';
import { CanActivate, Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class LoginGuard implements CanActivate{
    
    constructor(
        private store: Store,
        private router: Router
    ) { }

    canActivate() {
        return this.store.select(selectUser).pipe(
            map(user => {
                if (user && user.id) {
                    this.router.navigate(['/finance/home']);
                    return false;
                }

                
                return true;
            })
        );
    }
    
    
}