import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, catchError, tap, of, Subscription } from 'rxjs';
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
  ;


  currentUser: IUser | null = null;

  loggedIn$ = this.currentUser$$.pipe(map(user => !!user));


  subscription: Subscription;
  constructor(private http: HttpClient) {

    this.subscription = this.currentUser$.subscribe(currentUser => {
      if (currentUser) {
        this.currentUser = currentUser
      }
    });
  }
  register$(userData: CreateUserDto): Observable<IUser> {
    return this.http
      .post<IUser>(baseUrl + '/register', userData, { withCredentials: true })
      .pipe(tap(currentUser => this.currentUser$$.next(currentUser)))
  }

  login$(userData: { email: string, password: string }): Observable<IUser> {
    return this.http
      .post<IUser>(baseUrl + '/login', userData, { withCredentials: true })
      .pipe(tap(currentUser => this.currentUser$$.next(currentUser)))


  }

  logout$(): Observable<void> {
    return this.http
      .post<void>(baseUrl + '/logout', {}, { withCredentials: true })

  }


  authenticate(): Observable<IUser> {
    return this.http
      .get<IUser>('http://localhost:3000/auth/profile', { withCredentials: true })
      .pipe(tap(currentUser => this.handleLogin(currentUser)),
        catchError((err) => {
          this.currentUser$$.next(null)
          return of(err)
        })
      );
  }


  handleLogin(newUser: IUser) {
    this.currentUser = newUser

    this.currentUser$$.next(newUser)
  }
  handleLogout() {
    this.currentUser$$.next(undefined)
  }


}