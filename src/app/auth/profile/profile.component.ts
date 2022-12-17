import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { IUser } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: IUser | null = null;

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
        this.userId = value;
        
      },
      error: (err) => {
        console.log(err);
      },
    });

  }

}
