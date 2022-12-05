import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CookieService } from 'ngx-cookie';
import { AuthService } from "../service/auth.service";
// import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService, private _cookieService: CookieService) { }

  ngOnInit(): void {
    // console.log(Cookie.check('auth-cookie'))
  }

  // currentUser$ = this.store.select(globalState => globalState.currentUser);
  getCookie(key: string) {
    console.log(this._cookieService.get(key))
  }
  // isLoggedIn$ = this.currentUser$.pipe(map(user => !!user));

  // homePage(path: string): void {
  //   this.router.navigate([path])
  // }
  // charityPage(path: string): void {
  //   this.router.navigate([path])
  // }


  logoutHandler(): void {
    this.authService.logout$().subscribe({
      next: () => {
        // sessionStorage.removeItem('email');
        // sessionStorage.removeItem('authToken');
        // sessionStorage.removeItem('userId');

        this.router.navigate(['/']);
      },
      error: (e) => console.error(e)
    });
  }
}
