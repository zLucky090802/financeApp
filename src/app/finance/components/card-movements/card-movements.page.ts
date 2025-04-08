import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-card-movements',
  templateUrl: './card-movements.page.html',
  styleUrls: ['./card-movements.page.scss'],
  standalone: true,
  imports: [ IonRow, IonCol, CommonModule, FormsModule]
})
export class CardMovementsPage implements OnInit {

  constructor() { }

  @Input()
  public movements:any = [];
  ngOnInit() {
  }

}
