import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingsRoutingModule } from './meetings-routing.module';
import { CreateComponent } from './create/create.component';
import { AllMeetingsComponent } from './all-meetings/all-meetings.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
AllMeetingsComponent,
DetailsComponent,
CreateComponent
  ],
  imports: [
    CommonModule,
    MeetingsRoutingModule,
    FormsModule
  ],
  exports:[
    // CreateComponent
  ]
})
export class MeetingsModule { }
