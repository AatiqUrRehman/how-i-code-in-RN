import { UserState } from './user/types';
import { combineReducers } from "redux";
import { UserReducer } from './user/reducer';

export interface ApplicationState {
  user: UserState;
}

export const createRootReducer = () =>
  combineReducers({
    user: UserReducer,
  });