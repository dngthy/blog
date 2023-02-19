import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/store/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input('postDetail') postDetail!: Post
  target!: string;
  imageURL!: string;
  description!: string;
  tags!: String[];
  request!: string;
  response!: string;
  time!: String;
  constructor() { }

  ngOnInit(): void {
    this.target = this.postDetail.title
    this.imageURL = this.postDetail.imageURL  || `https://media.istockphoto.com/id/1047259374/photo/programming-source-code-abstract-background.jpg?s=612x612&w=0&k=20&c=07DAFiujCb58Zgu5ZArLprHiSKew5pCGqbTnop9GclA=`
    this.description = atob(this.postDetail.description)
    this.tags = this.postDetail.tags
    this.request = atob(this.postDetail.request)
    this.response = atob(this.postDetail.response)
    this.time = this.postDetail.createAt
  }
}
