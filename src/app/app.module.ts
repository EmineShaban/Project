import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { CoreModule } from "./core/core.module";
import { routes } from "./app-routing.module";
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    CoreModule,
    BrowserAnimationsModule,
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
