import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../service/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  handleFormSubmit(value: { email: string, password: string }): void {
    let email = value.email
    let password = value.password
    this.authService.login(email, password).subscribe({
      next: (result) => {
        sessionStorage.setItem('email', result.data)
        sessionStorage.setItem('authToken', result.accessToken)
        sessionStorage.setItem('userId', result._id)
        this.router.navigate(['/']);
      },
      error: (e) => console.error(e)
    });
  }
}
