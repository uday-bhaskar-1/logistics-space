import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  userData: any;
  constructor() { }


  ngOnInit(): void {
    this.userData = {
      profilePic:
        'https://images.template.net/wp-content/uploads/2016/04/27043339/Nature-Wallpaper1.jpg',
      coverPic: 'assets/images/coverPic2.jpg',
      firstName: 'dummy',
      lastName: 'user',
      userName: 'DUMMY001',
      friend: true,
      following: 20,
      followers: 10,
      posts: 2,
      id: 2,
      createdby: 'jan 15th 2001',
      bio: 'he is dummy user',
      link: 'ownbloglink.com',
      location: 'Visakhapatnam, India'
    };
  }

}
