import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, filter, map, Observable, share, Subscription, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from "../interfaces/user";
import { CreateUserDto } from "../interfaces/created";
import { __values } from 'tslib';



const baseUrl = 'http://localhost:3000/auth'

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private currentUser$$ = new BehaviorSubject<undefined | null | IUser>(undefined);
  currentUser$ = this.currentUser$$.asObservable().pipe();
  // user = this.currentUser$$
  //   .asObservable()
  //   .pipe()
  currentUser: IUser | null = null;

  loggedIn$ = this.currentUser$$.pipe(map(user => !!user));

  // user: IUser | undefined | null = null;


  constructor(private http: HttpClient) {

  }
  register$(userData: CreateUserDto): Observable<IUser> {
    return this.http
      .post<IUser>(baseUrl + '/register', userData, { withCredentials: true })
      .pipe(tap(user => this.currentUser$$.next(user)))
  }

  login$(userData: { email: string, password: string }): Observable<IUser> {
    return this.http
      .post<IUser>(baseUrl + '/login', userData, { withCredentials: true })
      .pipe(tap(user => this.currentUser$$.next(user)))


  }

  logout$(): Observable<void> {
    // this.user !== null
    return this.http
      .post<void>(baseUrl + '/logout', {}, { withCredentials: true })

  }


  authenticate(): Observable<IUser> {
    return this.http
      .get<IUser>('http://localhost:3000/auth/profile', { withCredentials: true })
      .pipe(tap(user => this.currentUser$$.next(user))
        // catchError((err) => {
        //   this.currentUser$$.next(null);
        //   return throwError(() => err);
        // })
      );
  }  


  handleLogin(newUser: IUser) {
    // this.currentUser$$.next(newUser)
    this.currentUser = newUser

    this.currentUser$$.next(newUser)
  }
  handleLogout() {
    // this.currentUser$$.next(undefined)
    this.currentUser$$.next(undefined)
  }


}