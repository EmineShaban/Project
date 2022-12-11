import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { AuthService } from "../service/auth.service";
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
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

  
  constructor(private router: Router, private createService: CreateService, private authService: AuthService, private activatedRoute: ActivatedRoute) { }
  refreshThemeRequest$ = new BehaviorSubject(undefined);

  ngOnInit(): void {
  //   combineLatest([
  //     this.activatedRoute.params
  //       .pipe(
  //         mergeMap(params => {
  //           console.log(params)
  //           const themeId = params['meetingId'];
  //           // console.log(themeId)
  //           return this.refreshThemeRequest$.pipe(mergeMap(() => this.createService.loadMeetingById(themeId)))
  //         })
  //       ),
  //     // this.authService.currentUser$
  //   ])
  //     .subscribe(
  //       // (res: any[]) => this.meetings =res
  //     );
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
