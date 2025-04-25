import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonItem, IonLabel, IonInput, IonButton, IonCol, IonRow, IonText, IonGrid } from "@ionic/angular/standalone";
import { Store } from '@ngrx/store';
import { User } from '../../interfaces/user.interface';

import { checkAuthStatus, login, loginFailure, loginSuccess } from 'src/app/store/auth/auth.actions';
import { authService } from '../../services/auth.service';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from 'src/app/store/auth/auth.effects';
import { LoginResponse } from '../../interfaces/login-response.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  imports: [ 
    IonRow, 
    IonCol, 
    IonButton, 
    IonInput, 
    RouterModule, 
    ReactiveFormsModule,
    
  ]
})
export class LoginPageComponent  implements OnInit {


  public user$?: Observable<User>;
  form: FormGroup;
  private response! : LoginResponse;

  constructor(
    private fb: FormBuilder,
    private store: Store, 
    private router: Router,
    private auth: authService
  ) {
    this.store.dispatch(checkAuthStatus())
    this.form = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onLogin() {
    if (this.form.valid) {
      const user = {
        email: this.form.value.email,
        password: this.form.value.password
      };
  
      this.auth.login(user).pipe(
        map((resp: any) => {
          localStorage.setItem('token', resp.usuario.token);
          localStorage.setItem('user', JSON.stringify(resp.usuario)); // si lo usas
          return loginSuccess({ user: resp.usuario });
        })
      ).subscribe(action => {
        this.store.dispatch(action);
        this.router.navigate(['/finance/home']);
      }, error => {
        this.store.dispatch(loginFailure({ error: error.error.message }));
      });
    }
  }
  
  
  ngOnInit() {
    // this.store.select(selectIsAuthenticated).subscribe(auth => {
    //   if (auth) {
    //     this.router.navigate(['/home']);
    //   }
    // });

    // this.store.select(selectErrorMessage).subscribe(error => {
    //   if (error) {
    //     // Mostrar error en un toast, modal, etc.
    //     console.error(error);
    //   }
    // });
  }

}
