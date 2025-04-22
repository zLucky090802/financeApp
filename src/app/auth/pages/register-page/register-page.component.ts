import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonInput, IonButton, IonCol, IonRow } from "@ionic/angular/standalone";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
  imports: [IonRow, IonCol, IonButton, IonInput, RouterModule]
})
export class RegisterPageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
