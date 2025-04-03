import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabButton, IonIcon, IonLabel, IonTabBar, IonTabs, IonRouterOutlet, IonButton, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-layout-pages',
  templateUrl: './layout-pages.page.html',
  styleUrls: ['./layout-pages.page.scss'],
  standalone: true,
  imports: [IonFabButton, IonFab, IonButton, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonTabButton, IonLabel]
})
export class LayoutPagesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
