import { Component, OnInit } from '@angular/core';
import { ShortedPipe } from '../../shared/shorted.pipe';
import { CharityService } from '../../service/charity.service';
import {ICharity} from '../../interfaces/charity'
@Component({
  selector: 'app-charity',
  templateUrl: './charity.component.html',
  styleUrls: ['./charity.component.css']
})


// http://localhost:3000/publication/charity

export class CharityComponent implements OnInit {
    show: boolean = false
    limit = 30;
    limit2 = 3;

  constructor(private homeService: CharityService) { }
  
  charityList: ICharity[] | null = null;
  
  ngOnInit(): void {
    this.homeService.loadCharity().subscribe({
  next: (value) =>{
  this.charityList = value
  }
    })
  }
  handleExpand(): void {
    this.limit = Infinity;
  }
  handleExpand2(): void {
    this.limit2 = Infinity;
  }

  shorted(value: string, limit: number): string {
    // console.log('ShortenPipe#transform', value);
    if(value.length > limit) {
      return `${value.substring(0, limit - 3)}...`;
    }

    return value;
  }
}

// export class CharityComponent implements OnInit {
//   charityList: any = [];
//   // selectedHero: ICharity;

//   // charityList: ICharity[] | null = null
//   show: boolean = false
//   // constructor(private homeService: HomeService) { }

//   ngOnInit(): void {}

//     // this.getHeroes();

//   //   this.homeService.loadCharity().subscribe({
//   //     next: (charityList) => {
//   //       this.charityList = charityList
//   //     }
//   //   })
//   // }
//   // onClick(): void{
//   //   shuldShowText: true
//   // }
//   // getHeroes() {
//   //   return this.homeService.loadCharity().subscribe(charityList1 => {
//   //     this.charityList = charityList1;
//   //   });
//   // }
  

// }  
