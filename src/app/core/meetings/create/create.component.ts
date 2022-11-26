import { Component, OnInit } from '@angular/core';
import { CreateService } from '../../service/create.service'
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private createService: CreateService) { }

  ngOnInit(): void {

  }

  handleFormSubmit(data: { date: string; time: string; place: string; imageUrl: string; description: string; }): void {
    // console.log(data)

    this.createService.create(data)
      .subscribe({
        next: (res) => {
          // console.log(res);
        },
        error: (e) => console.error(e)
      });
  }
}
