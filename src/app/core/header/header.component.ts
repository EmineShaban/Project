import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { AuthService } from "../service/auth.service";
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { CreateService } from '../service/create.service';
import { Store } from '@ngrx/store';
// import { IRootState, login, logout } from '../../+store';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser$: Observable<undefined | null | IUser> = this.authService.currentUser$
  isLoggedIn$: Observable<boolean> = this.authService.loggedIn$
  constructor(private router: Router, private createService: CreateService, private authService: AuthService, private activatedRoute: ActivatedRoute) { }

  // private isLoggingOut: boolean = false;

  ngOnInit(): void {

  }


  logoutHandler(): void {
    this.authService.logout$().subscribe({
      next: () => {
        // this.authService.handleLogout();

        this.router.navigate(['/']);
      },
      error: (e) => console.error(e)
    });
  }
}
