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
  show: boolean = false
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

// @Component({
//   selector: 'ng-if-else',
//   template: `
//     <button (click)="show = !show">{{show ? 'hide' : 'show'}}</button>
//     show = {{show}}
//     <br>
//     <div *ngIf="show; else elseBlock">Text to show</div>
//     <ng-template #elseBlock>Alternate text while primary text is hidden</ng-template>
// `
// })
// export class NgIfElse {
//   show = true;
// }


