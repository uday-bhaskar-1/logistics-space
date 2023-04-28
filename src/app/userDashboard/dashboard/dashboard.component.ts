import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  componentHeaderName;

  constructor(private router:Router){  }

  


  fetchComponentHeaderName(){
    let pageUrl = this.router.url;
    this.componentHeaderName = pageUrl.split('/').splice(-1, 1)[0];
    
  }


}
