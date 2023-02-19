import { Component } from '@angular/core';
import { User } from './store/models/users.model';
import { UserService } from './store/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user!: User;
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService.getUser().subscribe(data => {
      this.user = data;
    })
  }
}
