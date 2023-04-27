import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  postsData: any[] = [];
  userData: any;
  commentData: any[] = [];
  commentId: any;
  commentGroup: FormGroup;
  displayComments: boolean = false;
  constructor(private fb: FormBuilder) {
    this.commentGroup = this.fb.group({
      comment: [''],
    });
  }
  ngOnInit(): void {
    this.userData = {
      email: 'sanjay@yopmail.com',
      followerCount: 0,
      followingCount: 0,
      postCOUNT: 2,
      profilePic:
        'https://storage.googleapis.com/download/storage/v1/b/phoenix-social/o/photos%2Fpexels-aleksandar-pasaric-2341830.jpg?generation=1682484241626079&alt=media',
      firstName: 'dummy',
      lastName: 'user',
      userName: 'DUMMY001',
      id: 2,
      createdby: 'jan 15th 2001',
      bio: 'he is a dummy user',
      link: 'ownbloglink.com',
      location: 'Visakhapatnam, India',
    };
    this.postsData = [
      {
        commentCount: 3,
        imageUrl:
          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
        like: true,
        likeCount: 1,
        likedTime: '2023-04-26T10:00:25.898857',
        post: 'this is post',
        postId: 6,
        time: '2023-04-26T09:58:09.160662',
      },
      {
        commentCount: 3,
        imageUrl: null,
        like: true,
        likeCount: 1,
        likedTime: '2023-04-26T10:00:25.898857',
        post: 'this is post 2',
        postId: 6,
        time: '2023-04-26T09:58:09.160662',
      },
    ];
  }
  profilePictureUpload($event) {}
  removeProfilePicture() {}
  deletePost(postId) {}
  likePost(postId) {}
  getComments(postId) {
    this.commentData = [
      {
        firstName: 'sanjay',
        id: 5,
        lastName: '111',
        profilePic:
          'https://storage.googleapis.com/download/storage/v1/b/phoenix-social/o/photos%2Fpexels-aleksandar-pasaric-2341830.jpg?generation=1682484241626079&alt=media',
        userName: 'sanjay',
      },
      {
        firstName: 'sanjay',
        id: 5,
        lastName: '111',
        profilePic:
          'https://storage.googleapis.com/download/storage/v1/b/phoenix-social/o/photos%2Fpexels-aleksandar-pasaric-2341830.jpg?generation=1682484241626079&alt=media',
        userName: 'sanjay',
      },
    ];
  }
  userPostComment(postId) {}
}
