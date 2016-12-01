import { User } from '../models/user';
import * as userAuth from '../actions/user-auth';
import { Observable } from 'rxjs/Observable';
import { ActionTypes } from '../actions/user-auth';

export interface State {
  isAuthenticated: boolean;
  user: User | null;
  users: User[];
}

const initialState: State = {
  isAuthenticated: false,
  user: null,
  users: []
};

export function reducer(state = initialState, action: userAuth.Actions): State {
  switch(action.type) {
    case userAuth.ActionTypes.LOGIN_SUCCESS:
    case userAuth.ActionTypes.LOGOUT_SUCCESS:
    case userAuth.ActionTypes.CHECK_AUTH_SUCCESS: {
      return Object.assign({}, state, action.payload)
    }
    case userAuth.ActionTypes.FIND_USERS_SUCCESS: {
      return Object.assign({}, state, {
        users: action.payload
      })
    }
    default: {
      return state;
    }
  }
}

export const getAuthStatus = (state: State) => state.isAuthenticated;

export const getUser = (state: State) => state.user;

export const getUsers = (state: State) => state.users;