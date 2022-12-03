import { Injectable } from '@angular/core';
import { Observable, share } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from "../../interfaces/user";
import { CreateUserDto } from "../../interfaces/created";

const baseUrl = 'http://localhost:3000/auth'

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  register$(userData: CreateUserDto): Observable<IUser> {
    return this.http.post<IUser>(baseUrl+'/register', userData, {withCredentials: true})
  }

  login$(userData: { email: string, password: string }): Observable<IUser> {
    return this.http.post<IUser>(baseUrl+'/login', userData, { withCredentials: true }).pipe(share())
  }

  logout$(): Observable<void> {
      return this.http
        .post<void>(baseUrl+'/logout', {}, { withCredentials: true })
    }

}
