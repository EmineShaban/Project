import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: IUser | undefined | null;
// allMeeting: TemplateRef<NgIfContext<boolean>>|null;

  constructor( private authService: AuthService,) { }

  ngOnInit(): void {
    this.userId = this.authService.currentUser;
    
    // console.log(this.authService.currentUser)
    // console.log(this.userId?.joinedMeeting)
    // console.log(this.userId?.createdMeeting)

  }

}
