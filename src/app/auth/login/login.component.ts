import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../service/auth.service"
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '../../util';

const myRequired = (control: AbstractControl) => {
  // console.log('validator called');
  return Validators.required(control);
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
  }
  loginFormGroup: FormGroup = this.formBuilder.group({
    email: new FormControl(null, { validators: [myRequired, emailValidator], updateOn: 'submit' }),
    password: new FormControl(null, [Validators.required, Validators.minLength(5)])
  });
  shouldShowErrorForControl(controlName: string, sourceGroup: FormGroup = this. loginFormGroup) {
    return sourceGroup.controls[controlName].touched && sourceGroup.controls[controlName].invalid
  }
  handleFormSubmit(): void {

    this.authService.login$(this.loginFormGroup.value).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (e) => console.error(e)
    });
  }
}
