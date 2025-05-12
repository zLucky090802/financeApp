import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { AccountResponse } from './interfaces/account-response.interfaces';
import { BalanceCuenta } from './interfaces/account-balance.interface';

@Injectable({providedIn: 'root'})
export class AccountsService {
    private baseUrl = `${environment.base_url}/accounts`
    constructor(
        private http: HttpClient
    ) { }
    
    getCuentasPredeterminadas():Observable<AccountResponse []>{
      return this.http.get<AccountResponse[]>(`${this.baseUrl}/predeterminadas`);
    }
    getCuentasPersonalizadas(id:number):Observable<AccountResponse []>{
      return this.http.get<AccountResponse []>(`${this.baseUrl}/personalizadas/${id}`);
    }
    getCuentaById(id:number):Observable<AccountResponse>{
      return this.http.get<AccountResponse>(`${this.baseUrl}/${id}`);
    }
    crearCuenta(account:AccountResponse){
      return this.http.post(`${this.baseUrl}`, account);
    }
    actualizarCuenta(id:number, account:any){
      return this.http.put(`${this.baseUrl}/${id}`, account);
    }
    eliminarCuenta(id:number, user_id:number){
      return this.http.delete(`${this.baseUrl}/${id}/${user_id}`);
    }
    getBalanceCuentaPersonalizada(idUsuario: number, idCuenta:number):Observable<BalanceCuenta>{
      return this.http.get<BalanceCuenta>(`${this.baseUrl}/balance/${idUsuario}/${idCuenta}`);
    }
}