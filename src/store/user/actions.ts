import { UserActionTypes } from "./types";

import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ApplicationState } from "state/store/index";

export type AppThunk = ActionCreator<
  ThunkAction<void, ApplicationState, null, Action<string>>
>;

export const fetchRequest: AppThunk = () => {
  return (dispatch: Dispatch): Action => {
    try {
      return dispatch({
        type: UserActionTypes.FETCH_SUCCESS,
        payload: null
      });
    } catch (e) {
      return dispatch({
        type: UserActionTypes.FETCH_ERROR
      });
    }
  };
};