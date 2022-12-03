import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../service/auth.service";
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
    email: new FormControl(''),
    password: new FormControl('')
  });
  handleFormSubmit(): void {

    this.authService.login$(this.loginFormGroup.value).subscribe({
      next: () => {

        this.router.navigate(['/']);
      },
      error: (e) => console.error(e)
    });
  }
}
