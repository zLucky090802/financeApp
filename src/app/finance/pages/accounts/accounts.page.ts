import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonAvatar,
} from '@ionic/angular/standalone';
import { CardMovementsPage } from "../../components/card-movements/card-movements.page";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
  standalone: true,
  imports: [
    IonAvatar,
    IonCol,
    IonRow,
    IonGrid,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    CardMovementsPage
],
})
export class AccountsPage implements OnInit {
  capital = 26900;
  aDeber = 26900;
  balance = 0;
  public data = []

  constructor() {}

  ngOnInit() {}
}
