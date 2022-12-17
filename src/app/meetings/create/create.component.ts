import { Component, OnInit } from '@angular/core';
import { CreateService } from '../../service/create.service'
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { urlValidator } from 'src/app/shared/util';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor(private createService: CreateService, private router: Router, private formBuilder: FormBuilder) { }

  registerFormGroup: FormGroup = this.formBuilder.group({
    'date' : [null, [Validators.required]],
    'time': new FormControl(null, [Validators.required]),
    'place': new FormControl(null, [Validators.required, Validators.minLength(3)]),
    'avaliblePeople': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.min(1), Validators.max(30)]),
    'imageUrl': new FormControl('', [Validators.required, urlValidator]),
    'description': new FormControl(null, [Validators.required, Validators.minLength(10)]),

  })
  ngOnInit(): void {

  }
  shouldShowErrorForControl(controlName: string, sourceGroup: FormGroup = this.registerFormGroup) {
    return sourceGroup.controls[controlName].touched && sourceGroup.controls[controlName].invalid
  }

  handleFormSubmit(): void {
    const { date, time, place, avaliblePeople, imageUrl, description } = this.registerFormGroup.value
console.log(this.registerFormGroup.value  )
    this.createService.create(date, time, place, avaliblePeople, imageUrl, description )
      .subscribe({
        next: (res) => {

          this.router.navigate(['/']);

          console.log(res);
        },
        error: (e) => console.error(e)

      });
  }
}
