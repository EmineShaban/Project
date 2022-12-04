import { Component, OnInit } from '@angular/core';
import { CreateService } from '../../service/create.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private createService: CreateService, private router: Router) { }

  ngOnInit(): void {

  }

  handleFormSubmit(data: { date: string; time: string; place: string; imageUrl: string; description: string; }): void {
    // console.log(data)

    this.createService.create(data)
      .subscribe({
        next: (res) => {

          this.router.navigate(['/']);

          console.log(res);
        },
        error: (e) => console.error(e)
        
      });
  }
}
