import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { User } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { LoginResponse } from '../interfaces/login-response.interface';

@Injectable({providedIn: 'root'})
export class authService {
    constructor(private http: HttpClient) { }

    private baseUrl  = `${environment.base_url}/auth`;

    createUser(user:User){
       return this.http.post(`${this.baseUrl}/new`,user)
    }

    login(user: User): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(`${this.baseUrl}/`, user);
    }
      


    
}