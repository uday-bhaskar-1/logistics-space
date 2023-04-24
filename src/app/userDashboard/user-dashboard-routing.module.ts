import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsercardComponent } from '../shared/components/usercard/usercard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedpostComponent } from './feedpost/feedpost.component';
import { FriendsComponent } from './friends/friends.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {path:'',redirectTo:'home',pathMatch:'full'},
      { path: 'home', component: FeedpostComponent },
      { path: 'friends', component: FriendsComponent },
      { path: 'profile', component: ProfileComponent },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
