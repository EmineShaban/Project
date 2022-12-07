import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
// import { CookieService } from 'ngx-cookie';
import { AuthService } from "../service/auth.service";
// import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService,) { }

  ngOnInit(): void {

  }
  // currentUser$ = this.store.select(globalState => globalState.currentUser);


  logoutHandler(): void {
    this.authService.logout$().subscribe({
      next: () => {

        this.router.navigate(['/']);
      },
      error: (e) => console.error(e)
    });
  }
}
