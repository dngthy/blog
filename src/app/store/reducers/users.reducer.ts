import { User } from './../models/users.model';
import { loadUserSuccess } from './../actions/users.actions';
import { createReducer, on } from '@ngrx/store';

export const initialStoreUser:User = {} as User;

export const usersReducer = createReducer(
  initialStoreUser,
  on(loadUserSuccess, (state, data: User) => ({ ...state, ...data }))
)

// export const 
