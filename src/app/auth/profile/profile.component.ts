import { Component, OnInit } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IUser } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: IUser | null = null;
  // currentUser$: Observable<IUser>  = this.authService.currentUser$
  // userId!: IUser;
// allMeeting2: TemplateRef<NgIfContext<boolean>>|null;

  constructor( private authService: AuthService,) { }

  ngOnInit(): void {    
    this.authService.authenticate()
    .pipe(
      catchError((err) => {
        return throwError(() => new Error(err.message));
      }),
    )
    .subscribe({
      next: (value) => {
        console.log(value)
        this.userId = value;
        
      },
      error: (err) => {
        console.log(err);
      },
    });
    // this.authService.currentUser$;
    // console.log(this.userId?.joinedMeeting.length)
    // console.log(    this.authService.currentUser$     )
    // console.log(this.userId?.joinedMeeting)
    // console.log(this.userId?.createdMeeting)

  }

}
