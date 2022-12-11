import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateService } from '../../service/create.service';
import { mergeMap, tap } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import {IUser} from '../../../interfaces/user'
import {IMeeting} from '../../../interfaces/meeting'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  refreshThemeRequest$ = new BehaviorSubject(undefined);
  
  meetings: IMeeting[] | null = null;

  canSubscribe: boolean = false;
  currentUser?: IUser;
  isUserOwner: boolean = false;
  constructor(private createService: CreateService, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {


        
      // this.authService.currentUser$
    
    
    combineLatest([
      this.activatedRoute.params
        .pipe(
          mergeMap(params => {
            console.log(params)
            const themeId = params['meetingId'];
            // console.log(themeId)

            return this.refreshThemeRequest$.pipe(mergeMap(() => this.createService.loadMeetingById(themeId)))
          })
        ),
      // this.authService.currentUser$
    ])
      .subscribe(
        (res: any[]) => this.meetings =res
      );
      
      // (([meeting]) => {
      //   // this.currentUser = user
      //   this.meetings = meeting
      //   console.log(meeting)
      //   // this.isUserOwner = user && this.meeting.userId === user._id;
      // });
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
