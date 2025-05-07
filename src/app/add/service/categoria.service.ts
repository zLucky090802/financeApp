import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categorias } from '../interfaces/categorias.interface';

@Injectable({providedIn: 'root'})
export class CategoriaService {
    private baseUrl = environment.base_url;
    constructor(private http: HttpClient) { }
    
    getCuentasByUser(id:number):Observable<Categorias []>{
        return this.http.get<Categorias []>(`${this.baseUrl}/categorias/usuario/${id}`);
    }

    createcategoria(categoria: Categorias){
    return this.http.post(`${this.baseUrl}/categorias`,categoria);
    }

    updateCategoria(categoria: Categorias){
        return this.http.put(`${this.baseUrl}/categorias/${categoria.id}`, categoria);
    }

    deleteCategoria(id:number){
        return this.http.delete(`${this.baseUrl}/categorias/${id}`);
    }


}