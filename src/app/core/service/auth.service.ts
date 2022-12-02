import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from "../../interfaces/user";
import { CreateUserDto } from "../../interfaces/created";


const baseUrl = 'http://localhost:3000/auth'


@Injectable({
  providedIn: 'root'
})

// export interface CreateUserDto {
//   username: string,
//   email: string,
//   hashedPassword: string,

// }
export class AuthService {

  constructor(private http: HttpClient) { }

  register$(userData: CreateUserDto): Observable<IUser> {
    // return this.httpClient.post<IUser>(`${environment.apiUrl}/register`, userData, { withCredentials: true })

    return this.http.post<IUser>(baseUrl+'/register',userData, {withCredentials: true})
  }

  // register$(userData: CreateUserDto): Observable<IUser> {
  //   return this.httpClient.post<IUser>(`${environment.apiUrl}/register`, userData, { withCredentials: true })
  // }

  
  login(email: any, password:any ): Observable<any> {
    const result = this.http.post(baseUrl+'/login',{email, password});
// console.log(result)
    return result
  }

  logout$(): Observable<void> {
    // logout$(): Observable<void> {
      return this.http
        .post<void>(baseUrl+'/logout', {}, { withCredentials: true })
    }
    // return this.http.get(baseUrl+'/logout');



}
