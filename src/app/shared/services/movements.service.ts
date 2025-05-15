import { Injectable, TransferState } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Movements } from '../interfaces/movements.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { TransaccionesResponse } from 'src/app/statistics/interfaces/TransacionesResponse.interface';
import { BalanceResponse } from 'src/app/statistics/interfaces/balance-response.interface';
import { Transaccion } from 'src/app/statistics/interfaces/Transaccion.interface';

@Injectable({providedIn: 'root'})
export class MovementsService {
    constructor(private http: HttpClient) { }
    private baseUrl = `${environment.base_url}/movements`;

    
    createMovement (movement: Movements) {
      return this.http.post(this.baseUrl, movement);
    }
    getMovementsByUser(id:number):Observable<TransaccionesResponse>{
        return this.http.get<TransaccionesResponse>(`${this.baseUrl}/${id}`);
    }
    editMovement(id:number, movement:Movements){
        return this.http.put(`${this.baseUrl}/${id}`, movement);
    }
    deleteMovement(id:number){
        return this.http.delete(`${this.baseUrl}/${id}`)
    }
    getBalance(id:number){
        return this.http.get<BalanceResponse>(`${this.baseUrl}/balance/${id}`)
    }
    getMovementById(id:number):Observable<Transaccion>{
        return this.http.get<Transaccion>(`${this.baseUrl}/movement/${id}`)
    }
    updateMovement( id:number, movement:Movements){
        return this.http.put(`${this.baseUrl}/${id}`, movement)
    }
    getMovementsByAccountName(userId:number, accountName:string){
        return this.http.get(`${this.baseUrl}/${userId}/${accountName}`)
    }

}