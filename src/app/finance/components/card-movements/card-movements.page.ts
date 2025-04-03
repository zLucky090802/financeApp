import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';

@Component({
  selector: 'app-card-movements',
  templateUrl: './card-movements.page.html',
  styleUrls: ['./card-movements.page.scss'],
  standalone: true,
  imports: [IonRow, IonGrid, IonCol, CommonModule, FormsModule]
})
export class CardMovementsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
