import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, mergeMap } from 'rxjs';
import { IMeeting } from 'src/app/interfaces/meeting';
import { IUser } from 'src/app/interfaces/user';
import { AuthService } from '../../service/auth.service';
import { CreateService } from '../../service/create.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
  // public testform!: FormGroup;
  
  editform =this.formBuilder.group({
   date: (''),
   time:(''),
   place: (''),
   imageUrl:(''),
   description: (''),

 });
  refreshThemeRequest$ = new BehaviorSubject(undefined);
  constructor( private router: Router, 
    private createService: CreateService, 
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const meetingId = this.activatedRoute.snapshot.paramMap.get('meetingId');
    this.createService.loadMeetingById(meetingId!)

    .subscribe( (value: any) => {  
        this.editform = this.formBuilder.group({
          date: new FormControl(value['date']),
          time: new FormControl(value['time']),
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
    const { date, time, place, imageUrl, description } = this.editform.value;

    const meetingId = this.activatedRoute.snapshot.paramMap.get('meetingId');

    this.createService
      .update(meetingId!, date!, time!, place!, imageUrl!, description!)
      .subscribe({
        next: (value: any) => {
          console.log(value, `from edit`);
          this.router.navigate(['/meeting']);
        },
      });
  }
  }
