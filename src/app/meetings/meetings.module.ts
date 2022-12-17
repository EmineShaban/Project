import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingsRoutingModule } from './meetings-routing.module';
import { CreateComponent } from './create/create.component';
import { AllMeetingsComponent } from './all-meetings/all-meetings.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
AllMeetingsComponent,
DetailsComponent,
CreateComponent,
EditComponent,

  ],
  imports: [
    CommonModule,
    MeetingsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
  ]
})
export class MeetingsModule { }
