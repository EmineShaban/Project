import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../service/auth.service";
import { Router } from '@angular/router';
import { TokenStorageService } from "../../service/token-storage.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // tokenStorage: any;

  constructor(private authService: AuthService, private router: Router,  private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
  }
  handleFormSubmit(value: {email: string, password: string}): void{
//  console.log(value.email)
 let email = value.email
 let password = value.password

    this.authService.register(email, password)
    .subscribe({
      next: (result) => {
          // this.tokenStorage.saveToken(data.accessToken);
          // this.tokenStorage.saveUser(data);
          
    localStorage.setItem('email', result.data)
    localStorage.setItem('authToken', result.accessToken)
    localStorage.setItem('userId', result._id)
              this.router.navigate(['/']);
      },
      error: (e) => console.error(e)
    });

}  }

