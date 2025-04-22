import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Movements } from '../interfaces/movements.interface';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MovementsService {
    constructor(private http: HttpClient) { }
    private baseUrl = `${environment.base_url}/movements`;

    
    createMovement (movement: Movements) {
      return this.http.post(this.baseUrl, movement);
    }
    getMovementsByUser(id:number){
        return this.http.get(`${this.baseUrl}/${id}`);
    }
    editMovement(id:number, movement:Movements){
        return this.http.put(`${this.baseUrl}/${id}`, movement);
    }
    deleteMovement(id:number){
        return this.http.delete(`${this.baseUrl}/${id}`)
    }

}