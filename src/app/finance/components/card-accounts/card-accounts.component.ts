import { Component, Input, OnInit } from '@angular/core';
import { IonRow, IonCol } from "@ionic/angular/standalone";
import { AccountResponse } from '../../interfaces/account-response.interfaces';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-accounts',
  templateUrl: './card-accounts.component.html',
  styleUrls: ['./card-accounts.component.scss'],
  imports: [IonRow, IonCol, CommonModule, FormsModule]
})
export class CardAccountsComponent  implements OnInit {
  
  @Input()
  public data!: (AccountResponse & { nombreCuentaBase: string });

  @Input()
  public balance: number = 0;
  constructor() { }

  ngOnInit() {}

}
