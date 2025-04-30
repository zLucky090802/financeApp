import { Component, OnInit } from '@angular/core';
import { IonContent, IonTitle, IonToolbar, IonHeader, IonItem, IonLabel, IonInput, IonCheckbox, IonButton, IonSelect, IonSelectOption } from "@ionic/angular/standalone";

@Component({
  selector: 'app-accounts-form',
  templateUrl: './accounts-form.component.html',
  styleUrls: ['./accounts-form.component.scss'],
  imports:[IonContent, IonTitle, IonToolbar, IonHeader, IonItem, IonLabel,IonInput, IonCheckbox, IonButton, IonSelect, IonSelectOption],
})
export class AccountsFormComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
