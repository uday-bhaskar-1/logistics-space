import { Component } from '@angular/core';

@Component({
  selector: 'app-feedpost',
  templateUrl: './feedpost.component.html',
  styleUrls: ['./feedpost.component.scss'],
})
export class FeedpostComponent {
  postContentText: any;
  uploadImageUrls: any[] = [];
  postImageUpload: any;
  constructor() {}
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
}
