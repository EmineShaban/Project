import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../service/auth.service";
import { Router } from '@angular/router';
import {CreateUserDto} from'../../../interfaces/created'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  // tokenStorage: any;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  registerFormGroup: FormGroup = this.formBuilder.group({
    'username': new FormControl(''),
    'email': new FormControl(''),
    'passwords': new FormGroup({
      'password': new FormControl(''),
      'rePassword': new FormControl(''),
    })
  })

  handleFormSubmit(): void {
     console.log(this.registerFormGroup.value)
    const { username, email, passwords } = this.registerFormGroup.value;

     const body: CreateUserDto = {
      username: username,
      email: email,
      hashedPassword: passwords.password,

      // ...(tel && { tel: telRegion + tel})
    }
    this.authService.register(body).subscribe(()=> {
      // localStorage.setItem('auth_token', token);

      this.router.navigate(['/']);
    })
        // next: (result) => {

          // sessionStorage.setItem('email', result.data)
          // sessionStorage.setItem('authToken', result.accessToken)
          // sessionStorage.setItem('userId', result._id)
        
      //   error: (e) => console.error(e)
      // });

  }
}

