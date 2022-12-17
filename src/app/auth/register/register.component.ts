import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../service/auth.service"
import { Router } from '@angular/router';
import {CreateUserDto} from'../../interfaces/created'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator, passwordMatch } from '../util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  passwordControl = new FormControl(null, [Validators.required, Validators.minLength(5)]);
  get passwordsGroup(): FormGroup {
    return this.registerFormGroup.controls['passwords'] as FormGroup;
  }
  registerFormGroup: FormGroup = this.formBuilder.group({

    'firstName': new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'secondName': new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'email': new FormControl(null, [Validators.required, emailValidator]),
    'passwords': new FormGroup({
      'password': this.passwordControl,
      'rePassword':  new FormControl(null, [passwordMatch(this.passwordControl)]),
    })
  })
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  shouldShowErrorForControl(controlName: string, sourceGroup: FormGroup = this.registerFormGroup) {
    return sourceGroup.controls[controlName].touched && sourceGroup.controls[controlName].invalid
  }
  handleFormSubmit(): void {
    //  console.log(this.registerFormGroup.value)
    const { firstName, secondName, email, passwords } = this.registerFormGroup.value;

     const body: CreateUserDto = {
      firstName: firstName,
      secondName : secondName,
      email: email,
      hashedPassword: passwords.password,
    }

    this.authService.register$(body).subscribe(()=> {
      this.router.navigate(['/']);
    })
  }
}

