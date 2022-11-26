import { Component, OnInit } from '@angular/core';
import { IMeeting } from 'src/app/interfaces/meeting';
import {CreateService} from '../../service/create.service'

@Component({
  selector: 'app-all-meetings',
  templateUrl: './all-meetings.component.html',
  styleUrls: ['./all-meetings.component.css']
})
export class AllMeetingsComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }
  constructor(private createService: CreateService) { }
  show: boolean = false

  allMeetings: IMeeting[] | null = null;
  
  ngOnInit(): void {
    this.createService.getAll().subscribe({
  next: (value) =>{
  this.allMeetings = value
  }
    })
  }
}
