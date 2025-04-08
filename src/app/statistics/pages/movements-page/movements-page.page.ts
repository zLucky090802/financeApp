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
import { routes } from 'src/app/app.routes';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Chart } from 'chart.js';
import { CardMovementsPage } from '../../../finance/components/card-movements/card-movements.page';

@Component({
  selector: 'app-movements-page',
  templateUrl: './movements-page.page.html',
  styleUrls: ['./movements-page.page.scss'],
  standalone: true,
  imports: [
    IonGrid,
    IonCol,
    IonRow,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    CardMovementsPage,
  ],
})
export class MovementsPagePage implements OnInit {
  filter: String = 'all';
  allData = [
    {
      titulo: 'Pago de Proyecto Web',
      fecha: '2025-04-08',
      tipo: 'income',
      descripcion: 'Pago recibido por desarrollo de sitio web para cliente XYZ',
      monto: 1200
    },
    {
      titulo: 'Almuerzo con amigos',
      fecha: '2025-04-07',
      tipo: 'expense',
      descripcion: 'Comida en restaurante italiano',
      monto: -45
    },
    {
      titulo: 'Sueldo mensual',
      fecha: '2025-04-05',
      tipo: 'income',
      descripcion: 'Salario correspondiente a abril',
      monto: 2000
    },
    {
      titulo: 'Gasolina',
      fecha: '2025-04-04',
      tipo: 'expense',
      descripcion: 'Carga de gasolina al auto',
      monto: -60
    },
    {
      titulo: 'Venta de bicicleta',
      fecha: '2025-04-02',
      tipo: 'income',
      descripcion: 'Venta de bicicleta usada por Marketplace',
      monto: 300
    },
    {
      titulo: 'Supermercado',
      fecha: '2025-04-01',
      tipo: 'expense',
      descripcion: 'Compra de víveres para la semana',
      monto: -120
    }
  ];
  
  data: any = [];

  constructor(private route: ActivatedRoute) {}

  @ViewChild('myCanvas', { static: false }) canvasRef?: ElementRef;
  ctx:any = '';

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const raw = params['filter'];
      this.filter = ['all', 'income', 'expenses'].includes(raw) ? raw : 'all';
      console.log(this.filter);
    });
  }
  ngAfterViewInit() {
    // 🧩 Accedemos al contenedor del canvas
    this.filtrarDatos();

    
  }

  filtrarDatos() {
    if (this.filter === 'income') {
      this.data = this.allData.filter((m) => m.tipo === 'income');
    } else if (this.filter === 'expenses') {
      this.data = this.allData.filter((m) => m.tipo === 'expense');
    } else {
      this.data = [...this.allData];
    }
  
    if (this.data.length > 0 && this.canvasRef) {
      const canvasEl = this.canvasRef.nativeElement as HTMLCanvasElement;
      const parent = canvasEl.parentNode as HTMLElement;
  
      // ✅ Establecer tamaño
      parent.style.height = '25vh';
      parent.style.width = '100%';
      parent.style.display = 'flex';
      parent.style.justifyContent = 'center';
      parent.style.alignItems = 'center';
  
      this.ctx = canvasEl.getContext('2d');
  
      if (!this.ctx) {
        console.error('❌ No se pudo obtener el contexto 2D del canvas');
        return;
      }
  
      new Chart(this.ctx, {
        type: 'pie',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [
            {
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
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
          scales: {
            x: {
              display: false,
              grid: {
                display: false,
              },
            },
            y: {
              display: false,
              grid: {
                display: false,
              },
            },
          },
        },
      });
    }
  }
  
}
