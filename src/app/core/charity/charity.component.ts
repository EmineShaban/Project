import { Component, OnInit } from '@angular/core';
import { ICharity } from 'src/app/interfaces/charity';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-charity',
  templateUrl: './charity.component.html',
  styleUrls: ['./charity.component.css']
})
export class CharityComponent implements OnInit {

  charityList: ICharity[] | null = null
  // shuldShowText: boolean = false
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.loadCharity().subscribe({
      next: (charityList) => {
        this.charityList = charityList
      }
    })
  }
  // onClick(): void{
  //   shuldShowText: true
  // }
}


