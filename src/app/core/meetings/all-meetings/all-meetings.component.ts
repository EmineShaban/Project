import { Component, OnInit } from '@angular/core';
import { IMeeting } from 'src/app/interfaces/meeting';
import {CreateService} from '../../service/create.service'
import { Router } from '@angular/router';
import {AuthService} from '../../service/auth.service'


@Component({
  selector: 'app-all-meetings',
  templateUrl: './all-meetings.component.html',
  styleUrls: ['./all-meetings.component.css']
})
export class AllMeetingsComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }
  constructor(private createService: CreateService, private router: Router, private authService: AuthService,) { }


  // get isLoggedIn(){
  //   // console.log(this.authService.isLoggedIn)
  //   return this.authService.isLoggedIn;
  // }

  // get user(){
  //   console.log(this.authService?.user)

  //   return this.authService?.user;
  // }
  show: boolean = false

  allMeetings: IMeeting[] | null = null;
  
  ngOnInit(): void {
    this.createService.getAll().subscribe({
  next: (value) =>{
  this.allMeetings = value
  console.log(this.allMeetings )
  }
    })
  }

  // navigateToDetails() {
  //   this.router.navigate(['/meeting/this.allMeetings']);
  // }
}
