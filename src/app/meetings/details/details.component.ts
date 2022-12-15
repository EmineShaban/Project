import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateService } from '../../service/create.service';
import { map, mergeMap, tap } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { IUser } from '../../interfaces/user'
import { IMeeting } from '../../interfaces/meeting'
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  meetings: IMeeting | null | undefined
  refreshThemeRequest$ = new BehaviorSubject(undefined);


  // canSubscribe: boolean = false;
  // currentUser?: IUser;
  // isUserOwner: boolean = false;
  //
  meetingsId: string| undefined;
  canSubscribe: boolean = false;
  currentUser?: IUser | undefined | null;
  isUserOwner: boolean | undefined | null;
  isLoggedIn$: Observable<boolean> = this.authService.loggedIn$;
  themeId: string | undefined
  userId: any;
  //
  constructor( private router: Router, private createService: CreateService, private activatedRoute: ActivatedRoute, private authService: AuthService) { }
  ngOnInit(): void {
    this.userId = this.authService.currentUser;

    combineLatest([
      this.activatedRoute.params.pipe(
        mergeMap(params => {
          // console.log(params)
          const themeId = params['meetingId'];
          // console.log(themeId)

          return this.refreshThemeRequest$.pipe(mergeMap(() => this.createService.loadMeetingById(themeId)))
        })
      ),
      this.authService.currentUser$

    ])
      .subscribe(([meeting, user]) => {
        this.meetings = meeting
        this.currentUser = user
        this.isUserOwner = user && this.meetings?._ownerId == user._id;

      }
      )

  }

  deleteHandler(meetingsId: any) {
    // console.log(meetingsId)
    this.createService.delete(meetingsId).subscribe({
      next: () => {

        this.router.navigate(['/meeting']);
      },
      error: (e) => console.error(e)
    });

  }
  joinInMeeting(meetingsId: any, userId: any){
    this.createService.join(meetingsId, userId).subscribe({
      next: () => {

        // this.router.navigate(['/']);
      },
      error: (e) => console.error(e)
    });
  }


}




