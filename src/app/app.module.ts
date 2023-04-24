import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthModule } from './authentication/auth.module';
import { UserDashboardModule } from './userDashboard/user-dashboard.module';



@NgModule({
  declarations: [
    AppComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    CommonModule,
    UserDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
