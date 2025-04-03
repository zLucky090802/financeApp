import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonAvatar } from '@ionic/angular/standalone';
import { CardMovementsPage } from '../../components/card-movements/card-movements.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonAvatar, IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CardMovementsPage]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
