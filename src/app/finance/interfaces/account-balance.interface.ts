export interface BalanceCuenta {
	usuarioId: number;
	cuentaId: number;
	saldoInicial: number;
	balanceTransacciones: number;
	balanceTotal: number;
	totalGastos: number;
	totalIngresos: number;
}