import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateService } from '../../service/create.service';
import { map, mergeMap, tap } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import {IUser} from '../../../interfaces/user'
import {IMeeting} from '../../../interfaces/meeting'
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  refreshThemeRequest$ = new BehaviorSubject(undefined);
  
  meetings: IMeeting[] | undefined | null;

  // canSubscribe: boolean = false;
  // currentUser?: IUser;
  // isUserOwner: boolean = false;
 //
 canSubscribe: boolean = false;
 currentUser?: IUser | undefined | null;
 isUserOwner: boolean | undefined | null = false;
 isLoggedIn$: Observable<boolean> = this.authService.loggedIn$;

 //
  constructor(private createService: CreateService, private activatedRoute: ActivatedRoute, private authService: AuthService) { }
  ngOnInit(): void {

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
      .subscribe(([meeting, user]) =>{
        this.meetings = meeting
// let aaa =(Object.values(this.meetings))
// console.log(aaa)
        this.currentUser = user
          // this.isUserOwner = user && this.meetings._id === user._id;

          // console.log(this.meetings)
          console.log(this.currentUser?._id )
        }
      )
      

  }
//   ngOnInit(): void {
//     // const themeId = ;
//     this.activatedRoute.params.pipe(
//       mergeMap()
//       )}
//     // this.createService.loadMeetingById().subscribe({
//     //   next: (value) =>{
//     //   // this.allMeetings = value
//     //   // console.log(this.allMeetings._id )
//     //   }
//     //     })
  

}




