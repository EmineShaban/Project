import { Component, OnInit } from '@angular/core';
import { IMeeting } from 'src/app/interfaces/meeting';
import { CreateService } from '../../service/create.service'
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service'


@Component({
  selector: 'app-all-meetings',
  templateUrl: './all-meetings.component.html',
  styleUrls: ['./all-meetings.component.css']
})
export class AllMeetingsComponent implements OnInit {

  constructor(private createService: CreateService, private router: Router, private authService: AuthService,) { }

  show: boolean = false

  allMeetings: IMeeting[] | null | undefined

  ngOnInit(): void {
    this.createService.getAll().subscribe({
      next: (value) => {
        this.allMeetings = value
      }
    })
  }
}
