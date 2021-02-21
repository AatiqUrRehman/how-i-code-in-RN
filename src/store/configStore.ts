import { Store, createStore, applyMiddleware } from "redux";

// import createSagaMiddleware from "redux-saga";

import thunk from "redux-thunk";

import { ApplicationState, createRootReducer } from "store/index";

export default function ConfigureStore(
  initialState: ApplicationState
): Store<ApplicationState> {
  const store = createStore(
    createRootReducer(),
    initialState,
    applyMiddleware(thunk)
  );
  return store;
}