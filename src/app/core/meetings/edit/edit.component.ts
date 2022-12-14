import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, mergeMap } from 'rxjs';
import { IMeeting } from 'src/app/interfaces/meeting';
import { IUser } from 'src/app/interfaces/user';
import { AuthService } from '../../service/auth.service';
import { CreateService } from '../../service/create.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  meetings: IMeeting | null | undefined
  themeId: string | null | undefined
  currentUser?: IUser | undefined | null;

  refreshThemeRequest$ = new BehaviorSubject(undefined);
  constructor( private router: Router, 
    private createService: CreateService, 
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    combineLatest([
      this.activatedRoute.params.pipe(
        mergeMap(params => {
          // console.log(params)
           let themeId = params['meetingId'];
          // console.log(themeId)

          return this.refreshThemeRequest$.pipe(mergeMap(() => this.createService.loadMeetingById(themeId)))
        })
      ),
      this.authService.currentUser$

    ])
      .subscribe(([meeting, user]) => {
        this.meetings = meeting
        this.currentUser = user
        // this.isUserOwner = user && this.meetings?._ownerId == user._id;

      }
      )

  }


  loginFormGroup: FormGroup = this.formBuilder.group({
    date: (''),
    time:(''),
    place: (''),
    imageUrl:(''),
    description: (''),

  });



  handleFormSubmit(): void {
//     console.log(this.loginFormGroup.value)
//     let a = this.loginFormGroup.value
//     this.loginFormGroup.patchValue({ })
// console.log(a)
    this.createService.update(this.meetings?._id, this.loginFormGroup.value)
      .subscribe({
        next: (res) => {
          console.log(res);

          this.router.navigate(['/']);

        },
        error: (e) => console.error(e)
        
      });
  }}
