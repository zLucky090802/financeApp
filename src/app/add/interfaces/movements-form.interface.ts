export interface MovementForm {
    cuenta_id: number;
    categoria_id: number;
    tipo: 'ingreso' | 'gasto';
    monto: number;
    descripcion: string;
  }
  