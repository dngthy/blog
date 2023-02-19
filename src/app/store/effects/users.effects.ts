import { loadUserFailure, loadUserSuccess, USER_SIGN_UP, USER_SIGN_IN } from './../actions/users.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserService } from '../services/user.service'
import { User } from '../models/users.model';
import { Router } from '@angular/router';
@Injectable()
export class UsersEffects {

  signInUser$ = createEffect(() => this.actions$.pipe(
    ofType(USER_SIGN_IN),
    mergeMap((formUserSignIn) => this.userService.signInConnect(formUserSignIn).pipe(
      map((user: any) => {
        if (user?.status === 500) {
          return loadUserFailure()
        }
        this.router.navigateByUrl('app/updates')
        return loadUserSuccess(user as User)
      }),
      catchError(() => EMPTY)
    ))
  ))

  signUpUser$ = createEffect(() => this.actions$.pipe(
    ofType(USER_SIGN_UP),
    mergeMap((formUserSignUp) => this.userService.signUpConnect(formUserSignUp).pipe(
      map((user:any) => {
        if (user?.status === 500) {
          return loadUserFailure()
        }
        this.router.navigateByUrl('app/updates')
        return loadUserSuccess(user as User)
      } ),
      catchError(() => EMPTY)
    ))
  ))

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private router: Router,
  ) {}
}
