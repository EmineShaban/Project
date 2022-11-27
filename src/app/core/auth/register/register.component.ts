import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../service/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  handleFormSubmit(value: {}): void{
 
    // const body: CreateUserDto = {
    //   username: username,
    //   email: email,
    //   password: passwords.password,
    //   // ...(tel && { tel: telRegion + tel})
    // }

    // if (tel) {
    //   body.tel = telRegion + tel;
    // }

    this.authService.register(value).subscribe(() => {
      this.router.navigate(['/']);
    })

    // this.authService.register(value)
    // .subscribe({
    //   next: (res) => {
    //     console.log(res);
    //   },
    //   error: (e) => console.error(e)
    // });
}  }

