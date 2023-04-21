import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FeedpostComponent } from './feedpost/feedpost.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HomeComponent } from './home/home.component';
import { FriendsComponent } from './friends/friends.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    SidenavComponent,
    FeedpostComponent,
    DashboardComponent,
    
    HomeComponent,
    FriendsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule
  ]
})
export class UserDashboardModule { }
