import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'auth',
      loadChildren:()=>import ('./authentication/auth.module').then((m)=>m.AuthModule)
  },
  {path:'dashboard',
   loadChildren:()=>import ('./userDashboard/user-dashboard.module').then((d)=>d.UserDashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
