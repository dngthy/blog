import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const POSTS_SERVICE_URL = 'http://localhost:5000/posts/'
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
  post(attachment: Object) {
    return this.http.post(POSTS_SERVICE_URL, attachment)
  }
  getPost(data: {page: number, tags: String[]}) {
    return this.http.post(`${POSTS_SERVICE_URL}retrieve`, data)
  }
}
