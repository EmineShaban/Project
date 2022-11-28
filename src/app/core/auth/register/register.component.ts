import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../service/auth.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // tokenStorage: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  handleFormSubmit(value: { email: string, password: string }): void {
    //  console.log(value.email)
    let email = value.email
    let password = value.password

    this.authService.register(email, password)
      .subscribe({
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

