import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, share, Subscription, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUser } from "../../interfaces/user";
import { CreateUserDto } from "../../interfaces/created";
import { __values } from 'tslib';



const baseUrl = 'http://localhost:3000/auth'

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private _currentUser = new BehaviorSubject<undefined | null | IUser>(undefined);

  currentUser$ = this._currentUser.asObservable();
  loggedIn$ = this._currentUser.pipe(map(user => !!user));

  // user: IUser | undefined | null = null;


  constructor(private http: HttpClient) {

  }
  register$(userData: CreateUserDto): Observable<IUser> {
    return this.http
      .post<IUser>(baseUrl + '/register', userData, { withCredentials: true })
      .pipe(tap(user => this.handleLogin(user)))
  }

  login$(userData: { email: string, password: string }): Observable<IUser> {
    return this.http
      .post<IUser>(baseUrl + '/login', userData, { withCredentials: true })
      .pipe(tap(user => this.handleLogin(user)))


  }

  logout$(): Observable<void> {
    // this.user !== null
    return this.http
      .post<void>(baseUrl + '/logout', {}, { withCredentials: true })

  }


  authenticate(): Observable<IUser> {
    return this.http
      .get<IUser>('http://localhost:3000/charity', { withCredentials: true })
    // .pipe(tap(user => this.handleLogin(user) ))
  }


  handleLogin(newUser: IUser) {
    // this._currentUser.next(newUser)
    this._currentUser.next(newUser)
  }
  handleLogout() {
    // this._currentUser.next(undefined)
    this._currentUser.next(undefined)
  }
  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }
  // handleLogout() {
  //   this.store.dispatch(logout());
  // }

}