import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/auth'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(data: any): Observable<any> {
    return this.http.post(baseUrl+'/register', data);
  }
  login(data: any): Observable<any> {
    return this.http.post(baseUrl+'/login', data);
  }
}
