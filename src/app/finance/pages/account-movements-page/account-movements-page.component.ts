import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CapitalizePipe } from '../../pipes/capitalize.pipe';
import { MovementsService } from 'src/app/shared/services/movements.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/interfaces/user.interface';
import { selectUser } from 'src/app/store/auth/auth.selector';
import { Movements } from 'src/app/shared/interfaces/movements.interface';
import { CardMovementsPage } from "../../components/card-movements/card-movements.page";
import { TransaccionesResponse } from 'src/app/statistics/interfaces/TransacionesResponse.interface';
import { AccountsService } from '../../accounts.service';


@Component({
  selector: 'app-account-movements-page',
  templateUrl: './account-movements-page.component.html',
  styleUrls: ['./account-movements-page.component.scss'],
  imports: [IonicModule, CommonModule, CapitalizePipe, CardMovementsPage, RouterLink]
})
export class AccountMovementsPageComponent  implements OnInit {
  totalIngresos!:number;
  capitalTotal!:number;
  totalGastos!:number;
  balance!:number;
  nombre:string  = '';
  user$!: Observable<any>;
  user!: User;
  accountId!: number ;
  movements: TransaccionesResponse = { transacciones: [] }
  constructor(
    private route:ActivatedRoute,
    private movementsService: MovementsService,
    private store: Store, 
    private accountsService: AccountsService
  ) { 
    route.paramMap.subscribe(params=>{
       this.nombre = params.get('nombre')!;
       this.accountId = Number(params.get('id')!);
    });
    this.user$ = this.store.select(selectUser);
    this.user$.subscribe(user=>{
      this.user = user
    })
  }

  ngOnInit() {
    this.getBalanceCuentaById(this.user.id!, this.accountId);
    this.getMovementsByAccountName(this.user.id!, this.nombre);
  }

  getMovementsByAccountName(userId:number, accountName:string){
     this.movementsService.getMovementsByAccountName(userId, accountName).subscribe(movements=>{
      this.movements = movements
      console.log(this.movements)
     })
  }

  getBalanceCuentaById(userId:number, accountId:number){
    this.accountsService.getBalanceCuentaPersonalizada(userId, accountId).subscribe(resp=>{
      console.log(resp)
      this.totalGastos = resp.totalGastos;
      this.totalIngresos = resp.totalIngresos;
      this.balance = resp.balanceTotal;
      this.capitalTotal = resp.capitalTotal;
    })
  }

  deleteMovement(id:number){
    this.movementsService.deleteMovement(id).subscribe(resp=>{
      console.log(resp);
    })
  }

}