import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
  IonGrid,
} from '@ionic/angular/standalone';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { CardMovementsPage } from '../../../finance/components/card-movements/card-movements.page';
import { User } from 'src/app/auth/interfaces/user.interface';
import { selectUser } from 'src/app/store/auth/auth.selector';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MovementsService } from 'src/app/shared/services/movements.service';
import { TransaccionesResponse } from '../../interfaces/TransacionesResponse.interface';

@Component({
  selector: 'app-movements-page',
  templateUrl: './movements-page.page.html',
  styleUrls: ['./movements-page.page.scss'],
  standalone: true,
  imports: [
    IonGrid,
    IonCol,
    IonRow,
    CommonModule,
    FormsModule,
    CardMovementsPage,
    IonContent,
    RouterLink
  ],
})
export class MovementsPagePage implements OnInit {
  filter: String = 'all';
  movements: TransaccionesResponse = { transacciones: [] };
  user!: User;
  user$!: Observable<any>;

  @ViewChild('myCanvas', { static: false }) canvasRef!: ElementRef;
  ctx: any = '';

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private movementsService: MovementsService
  ) {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const raw = params['filter'];
      this.filter = ['all', 'ingreso', 'gasto'].includes(raw) ? raw : 'all';
    });

    this.user$ = this.store.select(selectUser);
    this.user$.subscribe((user) => {
      this.user = user;
      this.getMovements();
    });
  }

  ngAfterViewInit() {
    // El canvas se carga tras obtener movimientos y cuando se renderiza
    // Lo controlamos con setTimeout en getMovements()
  }

  getMovements() {
    this.movementsService.getMovementsByUser(this.user.id!).subscribe((movements) => {
      this.movements = movements;

      // Esperar al render del canvas antes de cargar el gráfico
      setTimeout(() => {
        if (this.canvasRef && this.canvasRef.nativeElement) {
          this.cargarCanvas();
        } else {
          console.warn('Canvas aún no está disponible');
        }
      }, 300);
    });
  }

  getFilteredMovements() {
    if (this.filter === 'ingreso') {
      return this.movements.transacciones.filter((m) => m.tipo === 'ingreso');
    } else if (this.filter === 'gasto') {
      return this.movements.transacciones.filter((m) => m.tipo === 'gasto');
    } else {
      return this.movements.transacciones;
    }
  }

  cargarCanvas() {
    if (!this.canvasRef || !this.canvasRef.nativeElement) {
      console.warn('Canvas aún no disponible');
      return;
    }

    const canvasEl = this.canvasRef.nativeElement as HTMLCanvasElement;
    this.ctx = canvasEl.getContext('2d');

    if (!this.ctx) {
      console.error('❌ No se pudo obtener el contexto 2D del canvas');
      return;
    }

    const { labels, data, backgroundColors } = this.getChartDataFromMovements();

    new Chart(this.ctx, {
      type: 'pie',
      data: {
        labels,
        datasets: [
          {
            label: 'Montos',
            data,
            backgroundColor: backgroundColors,
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
          },
        },
      },
    });
  }

  getChartDataFromMovements() {
    const filtered = this.getFilteredMovements();
    const labels: string[] = [];
    const data: number[] = [];

    filtered.forEach((item) => {
      
      labels.push(item.descripcion);
      data.push(Math.abs(Number(item.monto)));
    });
    
    console.log(labels)
    const backgroundColors = this.generateColors(filtered.length);

    return { labels, data, backgroundColors };
  }

  generateColors(count: number): string[] {
    const colors: string[] = ['#FE6B62'];

    while (colors.length < count) {
      const randomColor =
        '#' +
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, '0');

      if (!colors.includes(randomColor)) {
        colors.push(randomColor);
      }
    }

    return colors;
  }
}
