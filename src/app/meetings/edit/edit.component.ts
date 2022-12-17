import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IMeeting } from 'src/app/interfaces/meeting';
import { IUser } from 'src/app/interfaces/user';
import { CreateService } from '../../service/create.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { urlValidator } from 'src/app/shared/util';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  meetings: IMeeting | null | undefined
  meeting: IMeeting | null | undefined
  themeId: string | null | undefined
  currentUser?: IUser | undefined | null;

  editform = this.formBuilder.group({
    // date: (''),
    // time: (''),
    // avaliblePeople: (''),
    // place: (''),
    // imageUrl: (''),
    // description: (''),
    'date': [null, [Validators.required]],
    'time': [null, [Validators.required]],
    'place': [null, [Validators.required, Validators.minLength(3)]],
    'avaliblePeople': [null, [Validators.required, Validators.minLength(1), Validators.min(1), Validators.max(30)]],
    'imageUrl': ['', [Validators.required, urlValidator]],
    'description': [null, [Validators.required, Validators.minLength(10)]],

  });
  refreshThemeRequest$ = new BehaviorSubject(undefined);
  constructor(private router: Router,
    private createService: CreateService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const meetingId = this.activatedRoute.snapshot.paramMap.get('meetingId');
    this.createService.loadMeetingById(meetingId!)

      .subscribe((value: any) => {
        this.editform = this.formBuilder.group({
          date: new FormControl(value['date']),
          time: new FormControl(value['time']),
          avaliblePeople: new FormControl(value['avaliblePeople']),
          place: new FormControl(value['place']),
          imageUrl: new FormControl(value['imageUrl']),
          description: new FormControl(value['description']),

        });
      },
      );
  }

  handleFormSubmit(): void {
    // if (this.editForm.invalid) {
    //   return;
    // }
    const { date, time, avaliblePeople, place, imageUrl, description } = this.editform.value;

    const meetingId = this.activatedRoute.snapshot.paramMap.get('meetingId');

    this.createService
      .update(meetingId!, date!, time!, avaliblePeople!, place!, imageUrl!, description!)
      .subscribe({
        next: (value: any) => {
          console.log(value, `from edit`);
          this.router.navigate(['/meeting']);
        },
      });
  }

  shouldShowErrorForControl(controlName: string, sourceGroup: FormGroup = this.editform) {
    return sourceGroup.controls[controlName].touched && sourceGroup.controls[controlName].invalid
  }
}

