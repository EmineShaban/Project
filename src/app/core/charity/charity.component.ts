import { Component, OnInit } from '@angular/core';
import { CharityService } from '../../service/charity.service';
import { ICharity } from '../../interfaces/charity'
@Component({
  selector: 'app-charity',
  templateUrl: './charity.component.html',
  styleUrls: ['./charity.component.css']
})


export class CharityComponent implements OnInit {
  show: boolean = false
  limit = 30;
  limit2 = 3;

  constructor(private homeService: CharityService) { }

  charityList: ICharity[] | null = null;

  ngOnInit(): void {
    this.homeService.loadCharity().subscribe({
      next: (value) => {
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
    if (value.length > limit) {
      return `${value.substring(0, limit - 3)}...`;
    }

    return value;
  }
}
