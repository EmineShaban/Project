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
    // combineLatest([
    //   this.activatedRoute.params.pipe(
    //     mergeMap(params => {
    //       // console.log(params)
    //        let themeId = params['meetingId'];
    //       // console.log(themeId)

    //       return this.refreshThemeRequest$.pipe(mergeMap(() => this.createService.loadMeetingById(themeId)))
    //     })
    //   ),
    //   this.authService.currentUser$

    // ])
    //   .subscribe(([meeting, user]) => {
    //     this.meetings = meeting
    //     this.currentUser = user
    //     // this.isUserOwner = user && this.meetings?._ownerId == user._id;

    //   }
    //   )

      
  }

// 


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
//          this.testform.patchValue({      
//             date: this.testform.value.date,
      
//             time: this.testform.value.time,
      
//             place: this.testform.value.place,
      
//             imageUrl: this.testform.value.imageUrl,
      
//             description: this.testform.value.description,
      
//           });
//     console.log(this.testform.value)  //новая
//     console.log(this.meetings)  //стара]

// //     let a = this.loginFormGroup.value
// //     this.loginFormGroup.patchValue({ })
// // console.log(a)
// let userData: any = {};
//     // userData._id = testform._id;

//     userData.date = this.testform.value.date;

//     userData.time = this.testform.value.time;

//     userData.place = this.testform.value.place;

//     userData.imageUrl = this.testform.value.imageUrl;
//     userData.description = this.testform.value.description;

//     this.createService.update(this.meetings?._id, userData)
//       .subscribe({
//         next: (res) => {
//           console.log(res);

//           this.router.navigate(['/']);

//         },
//         error: (e) => console.error(e)
        
//       });
//   }}



// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { BehaviorSubject, combineLatest, mergeMap } from 'rxjs';
// import { IMeeting } from 'src/app/interfaces/meeting';
// import { IUser } from 'src/app/interfaces/user';
// import { AuthService } from '../../service/auth.service';
// import { CreateService } from '../../service/create.service';
// import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';


// @Component({
//   selector: 'app-edit',
//   templateUrl: './edit.component.html',
//   styleUrls: ['./edit.component.css']
// })
// export class EditComponent implements OnInit {
//   meetings: IMeeting | null | undefined
//   themeId: string | null | undefined
//   currentUser?: IUser | undefined | null;
//   public testform!: FormGroup;


//   refreshThemeRequest$ = new BehaviorSubject(undefined);
//   // formData: { _id: any; date: any; time: any; place: any; imageUrl: any; description: any; } | undefined;
//   constructor(private router: Router,
//     private createService: CreateService,
//     private activatedRoute: ActivatedRoute,
//     private authService: AuthService,
//     private formBuilder: FormBuilder) { }

//   ngOnInit(): void {
//     combineLatest([
//       this.activatedRoute.params.pipe(
//         mergeMap(params => {
//           // console.log(params)
//            let themeId = params['meetingId'];
//           // console.log(themeId)

//           return this.refreshThemeRequest$.pipe(mergeMap(() => this.createService.loadMeetingById(themeId)))
//         })
//         ),
//         this.authService.currentUser$

//     ])
//       .subscribe(([meeting, user]) => {
//         this.meetings = meeting
//         console.log(this.meetings)
//         this.currentUser = user
//         // this.isUserOwner = user && this.meetings?._ownerId == user._id;
//       })
      


//     this.testform = this.formBuilder.group({
//       id: this.meetings?._id,
//       date: this.meetings?.date,
//       time: this.meetings?.time,
//       place: this.meetings?.place,
//       imageUrl: this.meetings?.imageUrl,
//       description: this.meetings?.description,

//     });
//   }

//   showForm(data: IMeeting) {
//     console.log(this.meetings)

//     this.meetings = data;
// console.log(data)
//     this.testform.patchValue({
//       id: data._id,

//       date: data.date,

//       time: data.time,

//       place: data.place,

//       imageUrl: data.imageUrl,

//       description: data.description,

//     });

//   }

//   updateUser(testform: { value: { _id: any; date: any; time: any; place: any; imageUrl: any; description: any; }; }) {

//     let userData: any = {};
//     userData._id = testform.value._id;

//     userData.date = testform.value.date;

//     userData.time = testform.value.time;

//     userData.place = testform.value.place;

//     userData.imageUrl = testform.value.imageUrl;
//     userData.description = testform.value.description;

//     this.createService.update(userData._id, userData).subscribe((res) => {

//       console.log(res);

//     });

//   }

//   //   handleFormSubmit(): void {
//   // //     console.log(this.loginFormGroup.value)
//   // //     let a = this.loginFormGroup.value
//   // //     this.loginFormGroup.patchValue({ })
//   // // console.log(a)
//   //     this.createService.update(this.meetings?._id, this.loginFormGroup.value)
//   //       .subscribe({
//   //         next: (res) => {
//   //           console.log(res);

//   //           this.router.navigate(['/']);

//   //         },
//   //         error: (e) => console.error(e)

//   //       });
//   //   }}
// }