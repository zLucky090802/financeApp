import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonFabButton, IonFab, IonButton, IonCol, IonRow, IonGrid, IonFooter } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.page.html',
  styleUrls: ['./bottom-bar.page.scss'],
  standalone: true,
  imports: [IonFooter, IonGrid, IonRow, IonCol, IonButton, IonToolbar, CommonModule, FormsModule, RouterModule]
})
export class BottomBarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
