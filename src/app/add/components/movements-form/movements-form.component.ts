import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonContent, IonItem, IonLabel, IonInput, IonTextarea, IonDatetime, IonButton, IonSelect, IonSelectOption, IonTitle } from "@ionic/angular/standalone";

@Component({
  selector: 'app-movements-form',
  templateUrl: './movements-form.component.html',
  styleUrls: ['./movements-form.component.scss'],
  imports:[IonHeader, IonToolbar, IonContent, IonItem, IonLabel, IonInput, IonTextarea, IonDatetime, IonButton, IonSelect, IonSelectOption, IonTitle]
})
export class MovementsFormComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
