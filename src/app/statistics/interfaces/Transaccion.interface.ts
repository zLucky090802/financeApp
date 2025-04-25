export interface Transaccion {
	id: number;
	usuario_id: number;
	cuenta_id: number;
	categoria_id: number | null;
	tipo: string;
	monto: string;
	descripcion: string;
	fecha: string;
}


