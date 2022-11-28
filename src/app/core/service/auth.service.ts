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
 
    return result
  }


  
  login(email: any, password:any ): Observable<any> {
    const result = this.http.post(baseUrl+'/login',{email, password});
// console.log(result)
    return result
  }

  logout(): Observable<any> {
    const result = this.http.get(baseUrl+'/logout');

    // const result = await get(settings.host + '/users/logout');

    // sessionStorage.removeItem('email');
    // sessionStorage.removeItem('authToken');
    // sessionStorage.removeItem('userId');

    return result;
}


}
