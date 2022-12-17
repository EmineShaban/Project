import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { CoreModule } from "./core/core.module";
import { routes } from "./app-routing.module";
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateComponent } from './meetings/create/create.component';
import { FormsModule } from '@angular/forms';
import { AllMeetingsComponent } from './meetings/all-meetings/all-meetings.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { AuthModule } from './auth/auth.module';
import { MeetingsModule } from './meetings/meetings.module';
import { AuthService } from './service/auth.service';
import { FaqComponent } from '../app/core/faq/faq.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { EmailValidatorDirective } from './auth/email-validator.directive';
import { ErrorHandlerInterceptor } from './shared/error-handler.interceptor';
import { ShortedPipe } from './shared/shorted.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    FaqComponent,
    AuthenticateComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    CoreModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    MeetingsModule,

  ],
  providers: [    
    {
      provide: APP_INITIALIZER,
      useFactory: (authService: AuthService) => {
        return () => authService.authenticate();
      },
      deps: [AuthService],
      multi: true
    },
  {
    provide: HTTP_INTERCEPTORS,
    // deps: [AuthService],
    multi: true,
    useClass: ErrorHandlerInterceptor,
  }
],
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
