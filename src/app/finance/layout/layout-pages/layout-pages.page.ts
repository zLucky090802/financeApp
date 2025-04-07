import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BottomBarPage } from "src/app/shared/components/bottom-bar/bottom-bar.page";
import { IonContent, IonRouterOutlet, IonCol, IonRow, IonGrid, IonToolbar, IonFooter } from '@ionic/angular/standalone';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-layout-pages',
  templateUrl: './layout-pages.page.html',
  styleUrls: ['./layout-pages.page.scss'],
  standalone: true,
  imports: [ 
    CommonModule,
    IonContent,
    IonRouterOutlet,
    RouterModule,         
    BottomBarPage         
  ]
})
export class LayoutPagesPage implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log('Layout cargado');
  }
}
