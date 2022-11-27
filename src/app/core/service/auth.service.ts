import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from "../../interfaces/user";
const baseUrl = 'http://localhost:3000/auth'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(email: any, password:any ): Observable<any> {
    const result =  this.http.post<IUser>(baseUrl+'/register',{email, password} )
    // console.log(result)
  // sessionStorage.setItem('email', result.data)
  //  sessionStorage.setItem('authToken', result.accessToken)
  // sessionStorage.setItem('userId', result._id)
    return result
  }


  
  login(data: any): Observable<any> {
    return this.http.post(baseUrl+'/login', data);
  }




}
