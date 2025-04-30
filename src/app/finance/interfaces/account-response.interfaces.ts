export interface AccountResponse {
	id?: number;
	usuario_id: number;
	nombre: string;
	tipo: string;
	es_personalizada?: boolean;
	cuenta_base_id: number;
	saldo_inicial: number;
	fecha_creacion?: string;
    
}