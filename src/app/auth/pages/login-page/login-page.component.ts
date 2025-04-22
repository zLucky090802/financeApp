import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonItem, IonLabel, IonInput, IonButton, IonCol, IonRow, IonText, IonGrid } from "@ionic/angular/standalone";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  imports: [IonGrid, IonText, IonRow, IonCol, IonButton, IonInput, IonItem, IonLabel, RouterModule]
})
export class LoginPageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
