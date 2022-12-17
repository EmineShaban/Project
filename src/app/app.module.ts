import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { CoreModule } from "./core/core.module";
import { routes } from "./app-routing.module";
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { AuthModule } from './auth/auth.module';
import { MeetingsModule } from './meetings/meetings.module';
import { AuthService } from './service/auth.service';
import { FaqComponent } from '../app/core/faq/faq.component';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { ErrorHandlerInterceptor } from './shared/error-handler.interceptor';


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
      multi: true,
      useClass: ErrorHandlerInterceptor,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
