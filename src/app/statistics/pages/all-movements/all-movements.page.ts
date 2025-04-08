import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonContent, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonCol, IonRow, IonToolbar, IonGrid } from "@ionic/angular/standalone";
import { Chart, registerables } from 'chart.js';
import { CardMovementsPage } from "../../../finance/components/card-movements/card-movements.page";


@Component({
  selector: 'app-all-movements',
  templateUrl: './all-movements.page.html',
  styleUrls: ['./all-movements.page.scss'],
  imports: [ IonGrid, CardMovementsPage],
  standalone: true,
})
export class AllMovementsPage implements AfterViewInit, OnInit {

  data:any = []
  @ViewChild('myCanvas', { static: false }) canvasRef!: ElementRef;

  ngOnInit(): void {
    Chart.register(...registerables);

  }
  ngAfterViewInit() {
    const ctx = this.canvasRef.nativeElement.getContext('2d');

// 🧩 Accedemos al contenedor del canvas
const parent = ctx.canvas.parentNode as HTMLElement;

// ✅ Establecer tamaño
parent.style.height = '25vh';
parent.style.width = '100%';


parent.style.display = 'flex';
parent.style.justifyContent = 'center';  
parent.style.alignItems = 'center';       



    

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false, // Puedes ponerlo en false si no quieres la leyenda
            
          },
          tooltip: {
            enabled: true // Muestra los labels solo cuando pasas el mouse
          }
        },
        scales: {
          x: {
            display: false,
            grid: {
              display: false
            }
          },
          y: {
            display: false,
            grid: {
              display: false
            }
          }
        }
      }
      
    })}
}
