import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { AuthService } from "../../service/auth.service";
import { Observable } from 'rxjs';
import { CreateService } from '../../service/create.service';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser$: Observable<undefined | null | IUser> = this.authService.currentUser$
  isLoggedIn$: Observable<boolean> = this.authService.loggedIn$
  userId: any;
  constructor(private router: Router, private createService: CreateService, private authService: AuthService, private activatedRoute: ActivatedRoute) { }



  ngOnInit(): void {
    this.userId = this.authService.currentUser?.firstName;
  }


  logoutHandler(): void {
    this.authService.logout$().subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (e) => console.error(e)
    });
  }
}
