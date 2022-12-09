import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../core/service/auth.service"
import { Router } from '@angular/router';
import {CreateUserDto} from'../../interfaces/created'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

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
    //  console.log(this.registerFormGroup.value)
    const { username, email, passwords } = this.registerFormGroup.value;

     const body: CreateUserDto = {
      username: username,
      email: email,
      hashedPassword: passwords.password,
    }

    this.authService.register$(body).subscribe(()=> {
      this.router.navigate(['/']);
    })
  }
}

