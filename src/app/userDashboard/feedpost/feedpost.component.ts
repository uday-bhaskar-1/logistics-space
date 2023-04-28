import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feedpost',
  templateUrl: './feedpost.component.html',
  styleUrls: ['./feedpost.component.scss'],
})
export class FeedpostComponent {
  postContentText: any;
  uploadImageUrls: any[] = [];
  postImageUpload: any;
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
    this.postsData = [
      {
        firstName: 'dummy',
        lastName: 'user',
        userName: 'DUMMY001',
        profilePic: null,
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
        firstName: 'dummy',
        lastName: 'user',
        userName: 'DUMMY001',
        profilePic: null,
        commentCount: 3,
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwiVmk8xECYpwcSBwvsrFawLKHEGGUT5JQ_w57FXE-VQ&usqp=CAU&ec=48665698',

        like: true,
        likeCount: 1,
        likedTime: '2023-04-26T10:00:25.898857',
        post: 'this is post 2',
        postId: 6,
        time: '2023-04-26T09:58:09.160662',
      },
    ];
  }
  postPictureUpload(event) {
    const files: FileList = event.target.files;
    const urls: string[] = [];
    this.postImageUpload = event.target.files[0];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        urls.push(reader.result as string);
      };
    }
    this.uploadImageUrls = urls;
  }
  postContentPost() {}
  removeUploadImage(i) {
    this.uploadImageUrls.splice(i, 1);
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
