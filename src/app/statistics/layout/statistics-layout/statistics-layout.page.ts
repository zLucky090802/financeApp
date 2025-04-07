import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonRouterOutlet, IonCol, IonRow, IonGrid, IonAvatar } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { BottomBarPage } from "../../../shared/components/bottom-bar/bottom-bar.page";

@Component({
  selector: 'app-statistics-layout',
  templateUrl: './statistics-layout.page.html',
  styleUrls: ['./statistics-layout.page.scss'],
  standalone: true,
  imports: [IonAvatar, IonGrid, IonRow, IonCol, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule, IonRouterOutlet, BottomBarPage]
})
export class StatisticsLayoutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
