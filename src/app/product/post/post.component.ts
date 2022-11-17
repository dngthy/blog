import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/store/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input('postDetail') postDetail!: Post
  contentDecode: String = ''
  constructor() { }

  ngOnInit(): void {
    this.contentDecode = atob(this.postDetail.content)
  }

}
