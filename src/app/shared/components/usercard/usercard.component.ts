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
    this.allUsersData = [
      {
        profilePic: null,
        firstName: 'vamsi',
        lastName: 'krishna',
        userName: 'VAMSI001',
        friend: false,
        id: 1,
      },
      {
        profilePic:
          'https://images.template.net/wp-content/uploads/2016/04/27043339/Nature-Wallpaper1.jpg',
        firstName: 'dummy',
        lastName: 'user',
        userName: 'DUMMY001',
        friend: true,
        id: 2,
      },
      {
        profilePic: null,
        firstName: 'test',
        lastName: 'user',
        userName: 'TEST',
        friend: false,
        id: 3,
      },
    ];
  }
  allUsers() {
    // this.dashboard.allUsers().subscribe((res: any) => {
    //   this.allUsersData = res.response;
    // });
  }

  addFriend(id: number) {
    console.log('add friend function');

    // this.dashboard.addFriend(id).subscribe((res: any) => {
    //   this.allUsers();
    // });
  }
}
