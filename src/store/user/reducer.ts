import { Reducer } from "redux";
import { UserActionTypes, UserState } from "./types";

export const initialState: UserState = {
  data: [],
  errors: undefined,
  loading: false
};

const reducer: Reducer<UserState> = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case UserActionTypes.FETCH_SUCCESS: {
      console.log("action payload", action.payload);
      return { ...state, loading: false, data: action.payload };
    }
    case UserActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as UserReducer };