import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FeedpostComponent } from './feedpost/feedpost.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { FriendsComponent } from './friends/friends.component';
import { ProfileComponent } from './profile/profile.component';
import { GlobalsearchComponent } from './globalsearch/globalsearch.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SidenavComponent,
    FeedpostComponent,
    DashboardComponent,
    HomeComponent,
    FriendsComponent,
    ProfileComponent,
    GlobalsearchComponent,
  ],
  imports: [CommonModule, UserDashboardRoutingModule, SharedModule],
})
export class UserDashboardModule {}
