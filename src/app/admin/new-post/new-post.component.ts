import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { PostsService } from 'src/app/store/services/posts.service';

const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  newPost = new FormGroup({
    auth: new FormControl('dungnttde160234'),
    title: new FormControl( '', [Validators.required]),
    tags: new FormControl([] as String[], [Validators.required]),
    content: new FormControl(''),
    attachments: new FormControl([] as Object[]),
  })
  fileList: NzUploadFile[] = [];
  previewImage: string | undefined = '';
  previewVisible = false;
  allChecked = false;
  indeterminate = true;
  checkOptionsOne = [
    { label: 'Cryptography', value: 'Cryptography', checked: false },
    { label: 'Miscellaneous', value: 'Miscellaneous', checked: false },
    { label: 'PWN', value: 'PWN', checked: false },
    { label: 'OSINT', value: 'OSINT', checked: false },
    { label: 'Web Exploit', value: 'Web Exploit', checked: false }

  ];
  statusPost:String[] = []
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {}

  // File upload
  handlePreview = async (file: NzUploadFile): Promise<void> => {
    if (!file.url && !file['preview']) {
      file['preview'] = await getBase64(file.originFileObj!);
    }
    this.previewImage = file.url || file['preview'];
    this.previewVisible = true;
  };

  // Checkbox Control
  updateAllChecked(): void {
    this.indeterminate = false;
    if (this.allChecked) {
      this.checkOptionsOne = this.checkOptionsOne.map(item => ({
        ...item,
        checked: true
      }));
    } else {
      this.checkOptionsOne = this.checkOptionsOne.map(item => ({
        ...item,
        checked: false
      }));
    }
  }

  updateSingleChecked(): void {
    if (this.checkOptionsOne.every(item => !item.checked)) {
      this.allChecked = false;
      this.indeterminate = false;
    } else if (this.checkOptionsOne.every(item => item.checked)) {
      this.allChecked = true;
      this.indeterminate = false;
    } else {
      this.indeterminate = true;
    }
  }

  // Post
  post() {
    const chosenTags:String[] = [];
    this.checkOptionsOne.map(item => {
      if (item.checked) {
        chosenTags.push(item.value)
      }
    })
    this.newPost.controls['tags'].setValue(chosenTags)
    this.newPost.controls['attachments'].setValue(this.fileList.map(file => {
      const { thumbUrl, originFileObj } = file
      return { thumbUrl, originFileObj }
    }))

    if (this.newPost.valid) {
      console.log(this.newPost.value)
      this.postsService.post(this.newPost.value).subscribe(data => {
        console.log(data)
        this.statusPost.push('success')
      })
    }
    else {
      this.statusPost.push('error')
    }
  }
}
