import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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


@Component({
  selector: 'app-account-movements-page',
  templateUrl: './account-movements-page.component.html',
  styleUrls: ['./account-movements-page.component.scss'],
  imports: [IonicModule, CommonModule, CapitalizePipe, CardMovementsPage]
})
export class AccountMovementsPageComponent  implements OnInit {
  nombre:string  = '';
  user$!: Observable<any>;
  user!: User;
  movements: TransaccionesResponse = { transacciones: [] }
  constructor(
    private route:ActivatedRoute,
    private movementsService: MovementsService,
    private store: Store
  ) { 
    route.paramMap.subscribe(params=>{
       this.nombre = params.get('nombre')!;
      
    });
    this.user$ = this.store.select(selectUser);
    this.user$.subscribe(user=>{
      this.user = user
    })
  }

  ngOnInit() {
    this.getMovementsByAccountName(this.user.id!, this.nombre);
  }

  getMovementsByAccountName(userId:number, accountName:string){
     this.movementsService.getMovementsByAccountName(userId, accountName).subscribe(movements=>{
      this.movements = movements
      console.log(this.movements)
     })
  }

}