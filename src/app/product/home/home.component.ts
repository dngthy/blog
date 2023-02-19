import { PostsService } from 'src/app/store/services/posts.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/store/models/post';
import { first } from 'rxjs';
import { tagsPost } from 'src/app/utils/constants/posts-elements';
import { NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  posts: Post[] = [];
  page = 1
  tags = tagsPost
  chosenTags: String[] = this.tags;
  closeResult = '';
  postDetail!: Post;

  constructor(private postsService: PostsService,private offcanvasService: NgbOffcanvas) { }

  ngOnInit(): void {
    this.updateChanges()
  }
  open(content: any, post: Post) {
    this.postDetail = {
      title: post.title,
      imageURL: post.imageURL,
      description: atob(post.description),
      request: atob(post.request),
      response: atob(post.response),
      createAt: post.createAt,
      tags: post.tags
    }
		this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === OffcanvasDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on the backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
  pageChangeEvent(event: any) {
    this.page = event;
    this.updateChanges()
  }

  filterByTags(tag: String) {
    if (this.chosenTags.indexOf(tag) >=0 ) {
      this.chosenTags = this.chosenTags.filter(sampleTag => sampleTag !== tag)
    } else {
      this.chosenTags.push(tag);
    }
    this.updateChanges()
  }
  updateChanges() {
    const data = {
      tags: this.chosenTags,
      page: this.page
    }
    this.postsService.getPost(data).pipe(first())
      .subscribe(posts => {
        this.posts = posts as Post[];
      })
  }

}
