import { Component, OnInit } from '@angular/core';
// import { ICharity } from 'src/app/interfaces/charity';
import { HomeService } from '../home.service';
import {ICharity} from '../../interfaces/charity'
@Component({
  selector: 'app-charity',
  templateUrl: './charity.component.html',
  styleUrls: ['./charity.component.css']
})
export class CharityComponent implements OnInit {
  charityList: any = [];
  // selectedHero: ICharity;

  // charityList: ICharity[] | null = null
  show: boolean = false
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    // this.getHeroes();

    this.homeService.loadCharity().subscribe({
      next: (charityList) => {
        this.charityList = charityList
      }
    })
  }
  // onClick(): void{
  //   shuldShowText: true
  // }
  // getHeroes() {
  //   return this.homeService.loadCharity().subscribe(charityList1 => {
  //     this.charityList = charityList1;
  //   });
  // }
  

}  
