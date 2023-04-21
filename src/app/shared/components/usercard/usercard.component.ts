import { Component } from '@angular/core';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.scss'],
})
export class UsercardComponent {
  allUsersData: any[] = [];
  constructor() {}
  ngOnInit(): void {
    this.allUsers();
  }
  allUsers() {
    // this.dashboard.allUsers().subscribe((res: any) => {
    //   this.allUsersData = res.response;
    // });
  }

  addFriend(id: number) {
    // this.dashboard.addFriend(id).subscribe((res: any) => {
    //   this.allUsers();
    // });
  }
}
