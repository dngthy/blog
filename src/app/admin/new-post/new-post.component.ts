import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostsService } from 'src/app/store/services/posts.service';
import { tagsPost } from 'src/app/utils/constants/posts-elements';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  tags = tagsPost
  chosenTags: String[] = [];
  newPost = new FormGroup({
    title: new FormControl( '', [Validators.required]),
    imageURL: new FormControl( '', [Validators.required]),
    description: new FormControl( '', [Validators.required]),
    request: new FormControl( '', [Validators.required]),
    response: new FormControl( '', [Validators.required]),
    tags: new FormControl(this.chosenTags as String[], [Validators.required]),
  })
  statusPost:String[] = []
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {}
  // Post
  post() {
    this.newPost.controls['tags'].setValue(this.chosenTags)

    if (this.newPost.valid) {
      this.newPost.value.title = this.newPost.value.title?.trim()
      this.newPost.value.description = this.newPost.value.description?.trim()
      this.newPost.value.request = this.newPost.value.request?.trim()
      this.newPost.value.response = this.newPost.value.response?.trim()
      this.newPost.value.imageURL = this.newPost.value.imageURL?.trim()
      this.postsService.post(this.newPost.value).subscribe(data => {
        this.statusPost.push('success')
      })
    }
    else {
      console.log(this.newPost.value)
      this.statusPost.push('error')
    }
  }

  filterByTags(tag: String) {
    if (this.chosenTags.indexOf(tag) >=0 ) {
      this.chosenTags = this.chosenTags.filter(sampleTag => sampleTag !== tag)
    } else {
      this.chosenTags.push(tag);
    }
  }
}
