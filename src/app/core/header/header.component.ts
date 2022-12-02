import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from "../service/auth.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {

  }

  homePage(path: string): void {
    this.router.navigate([path])
  }
  charityPage(path: string): void {
    this.router.navigate([path])
  }


  logoutHandler(): void {
    this.authService.logout$().subscribe({
      next: () => {
        // sessionStorage.removeItem('email');
        // sessionStorage.removeItem('authToken');
        // sessionStorage.removeItem('userId');

        this.router.navigate(['/']);
      },
      error: (e) => console.error(e)
    });
  }
}
