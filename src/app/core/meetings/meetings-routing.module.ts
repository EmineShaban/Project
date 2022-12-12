import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { AllMeetingsComponent } from "./all-meetings/all-meetings.component";
import { CreateComponent } from "./create/create.component";
import { DetailsComponent } from "./details/details.component";
// import { LoginComponent } from "./login/login.component";
// import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    {
        path: 'meeting',
        component: AllMeetingsComponent,
    },
    {
      path: 'create',
      canActivate: [AuthGuard],

      component: CreateComponent
   },
    {
      canActivate: [AuthGuard],
      path: 'details/:meetingId',
      component: DetailsComponent,
    }
]

export const MeetingsRoutingModule = RouterModule.forChild(routes);