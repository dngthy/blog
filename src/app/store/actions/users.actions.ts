import { FormUserSignUp } from './../models/formUserSignUp.model';
import { createAction, props } from '@ngrx/store';
import { FormUserSignIn } from '../models/formUserSignIn.model';
import { User } from '../models/users.model';

export const loadUserSuccess = createAction(
  '[User] Load Current User Into Store',
  props<User>()
)

export const userSignIn = createAction(
  '[User] User Sign In',
  props<FormUserSignIn>()
)

export const userSignUp = createAction(
  '[User] User Sign Up',
  props<FormUserSignUp>()
)

