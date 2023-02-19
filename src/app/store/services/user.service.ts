import { loadUserSuccess, userLogOut, userSignIn, userSignUp } from './../actions/users.actions';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormUserSignIn } from '../models/formUserSignIn.model';
import { FormUserSignUp } from '../models/formUserSignUp.model';
import { User } from '../models/users.model';
import { environment } from 'src/environments/environment';

const AUTH_URL = environment.AUTH_URL;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  user$: Observable<User>;
  constructor(
    private http: HttpClient,
    private store: Store<{users: User}>,
    ) {
      this.user$ = store.select('users')
     }

  signInConnect(data: FormUserSignIn) {
    return this.http.post(`${AUTH_URL}sign-in`, data)
  }

  signUpConnect(data: FormUserSignUp) {
    return this.http.post(`${AUTH_URL}sign-up`, data)
  }

  signIn(data: FormUserSignIn) {
    this.store.dispatch(userSignIn(data))
  }

  signUp(data: FormUserSignUp) {
    this.store.dispatch(userSignUp(data))
  }

  logOut() {
    this.store.dispatch(userLogOut())
  }

  getUser() {
    return this.user$
  }
}
