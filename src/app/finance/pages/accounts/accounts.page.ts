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
import { CardMovementsPage } from '../../components/card-movements/card-movements.page';
import { AccountsService } from '../../accounts.service';
import { Store } from '@ngrx/store';
import { User } from 'src/app/auth/interfaces/user.interface';
import { forkJoin, Observable, map } from 'rxjs';
import { selectUser } from 'src/app/store/auth/auth.selector';
import { MovementsService } from 'src/app/shared/services/movements.service';
import { AccountResponse } from '../../interfaces/account-response.interfaces';
import { BalanceCuenta } from '../../interfaces/account-balance.interface';
import { CardAccountsComponent } from "../../components/card-accounts/card-accounts.component";

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
    IonToolbar,
    CommonModule,
    FormsModule,
    CardMovementsPage,
    CardAccountsComponent
],
})
export class AccountsPage implements OnInit {
  capital = 0;
  aDeber = 0;
  balance = 0;

  public data: (AccountResponse & { nombreCuentaBase: string } & {balance$: Observable<BalanceCuenta>})[] = [];

  private user$!: Observable<any>;
  private user!: User;
  public accounts!: AccountResponse [];

  constructor(
    private accountsService: AccountsService,
    private store: Store,
    private movementsService: MovementsService
  ) {
    this.user$ = this.store.select(selectUser);
    this.user$.subscribe((user) => {
      this.user = user;
    });
  }

  ngOnInit() {
    this.getCuentasPersonalizadas(this.user.id!);
    this.getmovements(this.user.id!);
  }

  getCuentasPersonalizadas(id: number) {
    this.accountsService.getCuentasPersonalizadas(id).subscribe(cuentas => {
      this.accounts = cuentas; // cuentas ya es AccountResponse[]
  
      const requests = cuentas.map((cuenta: AccountResponse) => 
        this.accountsService.getCuentaById(cuenta.cuenta_base_id!)
      );
  
      forkJoin(requests).subscribe(cuentasBase => {
        const cuentasConNombreBase = this.accounts.map((cuenta: AccountResponse, index: number) => ({
          ...cuenta,
          nombreCuentaBase: cuentasBase[index].nombre,
          balance$: this.getBalanceCuentaPersonalizada(this.user.id!, cuenta.id!)
        }));
        
        console.log(cuentasConNombreBase)
        
        this.data = cuentasConNombreBase;

      });
    });
  }


  getmovements(id: number) {
    this.movementsService.getBalance(id).subscribe((res) => {
      (this.balance = res.balance),
        (this.capital = res.ingresos),
        (this.aDeber = res.gastos);
    });
  }
  getBalanceCuentaPersonalizada(idUsuario: number, idCuenta: number): Observable<BalanceCuenta> {
    return this.accountsService.getBalanceCuentaPersonalizada(idUsuario, idCuenta);
  }
  
  

  getCuentaById(id: number) {
    this.accountsService.getCuentaById(id).subscribe((cuenta) => {});
  }
}
