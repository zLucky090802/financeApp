import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonGrid, IonRow, IonContent, IonCol } from "@ionic/angular/standalone";

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss'],
  imports: [IonCol, IonCardContent, IonCardHeader, IonCardTitle, IonCard, IonGrid, IonRow, IonContent, RouterLink]
})
export class AddPageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
