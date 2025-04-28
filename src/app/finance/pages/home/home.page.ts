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
import { MovementsService } from 'src/app/shared/services/movements.service';
import { TransaccionesResponse } from 'src/app/statistics/interfaces/TransacionesResponse.interface';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/store/auth/auth.selector';
import { User } from 'src/app/auth/interfaces/user.interface';
import { Observable } from 'rxjs';
import { Transaccion } from 'src/app/statistics/interfaces/Transaccion.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonAvatar,
    IonCol,
    IonRow,
    IonGrid,
    IonContent,
    IonToolbar,
    CommonModule,
    FormsModule,
    CardMovementsPage,
    RouterLink
  ],
})
export class HomePage implements OnInit {
  user$!: Observable<any>;
  user!: User;
  movements: TransaccionesResponse = { transacciones: [] };
  balance: number = 0;

  constructor(
    private movementsService: MovementsService,
    private store: Store
  ) {
    this.user$ = this.store.select(selectUser);
    this.user$.subscribe((user) => {
      this.user = user;

      // Solo llamas al servicio cuando ya tienes el usuario
      this.loadMovements();
    });
  }

  ngOnInit() {
    this.getBalance();
  }

  loadMovements() {
    this.movementsService
      .getMovementsByUser(this.user.id!)
      .subscribe((movements) => {
        this.movements = {
          transacciones: movements.transacciones.slice(0, 5),
        };
      });
  }

  getBalance() {
    this.movementsService.getBalance(this.user.id!).subscribe((res) => {
      this.balance = res.balance;
    });
  }
}
