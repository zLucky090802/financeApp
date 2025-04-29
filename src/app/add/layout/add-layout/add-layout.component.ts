import { Component, OnInit } from '@angular/core';
import { IonContent, IonRouterOutlet } from "@ionic/angular/standalone";
import { BottomBarPage } from "../../../shared/components/bottom-bar/bottom-bar.page";

@Component({
  selector: 'app-add-layout',
  templateUrl: './add-layout.component.html',
  styleUrls: ['./add-layout.component.scss'],
  imports: [IonContent, IonRouterOutlet, BottomBarPage]
})
export class AddLayoutComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
