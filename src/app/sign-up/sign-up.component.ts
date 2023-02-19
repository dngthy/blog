import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormUserSignUp } from '../store/models/formUserSignUp.model';
import { UserService } from '../store/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  formUserSignUp = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required])
  })
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  signUp() {
    if (this.formUserSignUp.valid) {
      this.userService.signUp(this.formUserSignUp.value as FormUserSignUp)
    }
  }

}
