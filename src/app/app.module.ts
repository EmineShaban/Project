import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { CoreModule } from "./core/core.module";
import { routes } from "./app-routing.module";
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateComponent } from './core/meetings/create/create.component';
import { FormsModule } from '@angular/forms';
import { AllMeetingsComponent } from './core/meetings/all-meetings/all-meetings.component';
import { LoginComponent } from './core/auth/login/login.component';
import { RegisterComponent } from './core/auth/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    AllMeetingsComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    CoreModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { CoreModule } from "./core/core.module";
// // import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// // import { ThemeListComponent } from './theme-list/theme-list.component';
// // import { RecentPostsComponent } from './recent-posts/recent-posts.component';
// import {     HttpClientModule} from '@angular/common/http';
// // import { MainComponent } from './main/main.component';

// @NgModule({
//   declarations: [
//     AppComponent,

//   ],
//   imports: [
//     BrowserModule,
//     CoreModule,
//     HttpClientModule,
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
