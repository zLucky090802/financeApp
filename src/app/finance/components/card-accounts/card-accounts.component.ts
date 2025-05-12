import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IonRow, IonCol, IonIcon, IonButton, IonAvatar, IonList, IonItemSliding, IonItem, IonLabel, IonNote, IonReorder, IonItemOptions, IonItemOption } from "@ionic/angular/standalone";
import { AccountResponse } from '../../interfaces/account-response.interfaces';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-accounts',
  templateUrl: './card-accounts.component.html',
  styleUrls: ['./card-accounts.component.scss'],
  imports: [IonItemOption, IonItemOptions, IonReorder, IonNote, IonLabel, IonItem, IonItemSliding, IonList, IonAvatar, IonButton, IonIcon, IonRow, IonCol, CommonModule, FormsModule]
})
export class CardAccountsComponent  implements OnInit {
  
  @Input()
  public data!: (AccountResponse & { nombreCuentaBase: string });

  @Input()
  public balance: number = 0;



  @Output() eliminar = new EventEmitter<any>();

  @ViewChild('slidingItem', { static: true }) slidingItem!: IonItemSliding;

  constructor() { }

  ngOnInit() {}

  onEliminar() {
    this.eliminar.emit(this.data.id);
  }

  open() {
    this.slidingItem.open('end');
  }
  

}
