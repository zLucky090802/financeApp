import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-more-settings',
  templateUrl: './more-settings.page.html',
  styleUrls: ['./more-settings.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonicModule,RouterLink]
})
export class MoreSettingsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
