import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, IonToolbar, IonFooter, IonHeader, IonTitle, IonContent, IonCol, IonRow, IonGrid } from "@ionic/angular/standalone";

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss'],
  imports: [IonGrid, IonRow, IonCol, IonContent, IonTitle, IonHeader, IonFooter, IonToolbar, IonRouterOutlet]
})
export class AuthLayoutComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
