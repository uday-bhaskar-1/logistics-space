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
import { SettingsComponent } from './settings/settings.component';
import { TimePipe } from '../shared/pipes/time.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    SidenavComponent,
    FeedpostComponent,
    DashboardComponent,
    HomeComponent,
    FriendsComponent,
    ProfileComponent,
    GlobalsearchComponent,
    SettingsComponent,
    TimePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserDashboardRoutingModule,
    SharedModule,
  ],
})
export class UserDashboardModule {}
