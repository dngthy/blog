import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormUserSignIn } from '../store/models/formUserSignIn.model';
import { UserService } from '../store/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  formUserSignIn = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  signIn() {
    if (this.formUserSignIn.valid) {
      this.userService.signIn(this.formUserSignIn.value as FormUserSignIn)
    }
  }

}
