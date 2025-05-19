import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Transaccion } from 'src/app/statistics/interfaces/Transaccion.interface';

@Component({
  selector: 'app-card-movements',
  templateUrl: './card-movements.page.html',
  styleUrls: ['./card-movements.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class CardMovementsPage implements OnInit {
  constructor() {}

  @Input()
  public movements!: Transaccion;
  ngOnInit() {}

  @Output() delete = new EventEmitter<number>();

  onDelete(id: number) {
    this.delete.emit(id);
  }
}
