import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const POSTS_SERVICE_URL = environment.POSTS_SERVICE_URL
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
