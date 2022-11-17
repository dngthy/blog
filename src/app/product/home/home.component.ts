import { PostsService } from 'src/app/store/services/posts.service';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { Post } from 'src/app/store/models/post';
import { first } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
  page = 1
  tags = ['Cryptography', 'Web exploitation', 'OSINT', 'Reverse Engineering', 'Blockchain' ]
  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.getPosts()
  }
  getPosts() {
    this.postsService.getPost({
      page: this.page,
      tags: this.tags
    }).pipe(first())
    .subscribe(posts => {
      this.posts = posts as Post[];
    })
  }
  pageChangeEvent(event: any) {
    this.page = event;
    this.getPosts()
  }

  filterByTags(indexTag: number) {

  }

}
