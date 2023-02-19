import { FormUserSignUp } from './../models/formUserSignUp.model';
import { createAction, props } from '@ngrx/store';
import { FormUserSignIn } from '../models/formUserSignIn.model';
import { User } from '../models/users.model';

export const LOAD_USER_SUCCESS = '[User] Load Current User Into Store'
export const USER_SIGN_IN = '[User] User Sign In'
export const USER_SIGN_UP = '[User] User Sign Up'
export const USER_LOG_OUT = '[User] User Log Out'

export const loadUserSuccess = createAction(
  '[User] Load Current User Into Store',
  props<User>()
)

export const loadUserFailure = createAction(
  '[User] Load Current User Unsuccessful',
)

export const userSignIn = createAction(
  USER_SIGN_IN,
  props<FormUserSignIn>()
)

export const userSignUp = createAction(
  USER_SIGN_UP,
  props<FormUserSignUp>()
)

export const userLogOut = createAction(
  USER_LOG_OUT,
)

