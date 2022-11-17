import { loadUserSuccess, USER_SIGN_UP } from './../actions/users.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LOAD_USER_SUCCESS, USER_SIGN_IN } from '../actions/users.actions';
import { UserService } from '../services/user.service'
import { User } from '../models/users.model';
@Injectable()
export class UsersEffects {

  signInUser$ = createEffect(() => this.actions$.pipe(
    ofType(USER_SIGN_IN),
    mergeMap((formUserSignIn) => this.userService.signInConnect(formUserSignIn).pipe(
      (data)=> { console.log(data); return data },
      map(user => loadUserSuccess(user as User)),
      catchError(() => EMPTY)
    ))
  ))

  signUpUser$ = createEffect(() => this.actions$.pipe(
    ofType(USER_SIGN_UP),
    mergeMap((formUserSignUp) => this.userService.signUpConnect(formUserSignUp).pipe(
      (data)=> { console.log(data); return data },
      map(user => loadUserSuccess(user as User)),
      catchError(() => EMPTY)
    ))
  ))

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
