import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateService } from '../../service/create.service';
import { mergeMap } from 'rxjs/operators';
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
  meetingsId: string | undefined;
  currentUser?: IUser | undefined | null;
  isUserOwner: boolean | undefined | null;
  isLoggedIn$: Observable<boolean> = this.authService.loggedIn$;
  meetingId: string | undefined
  userId: any;
  place: boolean = false;
  alreadyJoined: boolean | undefined;

  constructor(private router: Router, private createService: CreateService, private activatedRoute: ActivatedRoute, private authService: AuthService) { }
  ngOnInit(): void {

    this.userId = this.authService.currentUser;

    combineLatest([
      this.activatedRoute.params.pipe(
        mergeMap(params => {
          const meetingId = params['meetingId'];
          return this.refreshThemeRequest$.pipe(mergeMap(() => this.createService.loadMeetingById(meetingId)))
        })
      ),
      this.authService.currentUser$

    ])
      .subscribe(([meeting, user]) => {
        this.meetings = meeting
        this.place = meeting.avaliblePeople > 0 == true
        this.alreadyJoined = user?.joinedMeeting.includes(meeting._id)
        this.currentUser = user
        this.isUserOwner = user && this.meetings?._ownerId == user._id;
      }
      )
  }

  deleteHandler(meetingsId: any) {
    this.createService.delete(meetingsId).subscribe({
      next: () => {

        this.router.navigate(['/meeting']);
      },
      error: (e) => console.error(e)
    });

  }
  joinInMeeting(meetingsId: any, userId: any) {
    this.createService.join(meetingsId, userId).subscribe({
      next: () => {

        this.router.navigate(['/meeting']);
      },
      error: (e) => console.error(e)
    });
  }


}




