import rootReducer from "../combineReducers/combineReducer";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { sagas } from "../saga/saga";
import { actions } from "../actiontypes/actiontypes";
const sagaMiddleware = createSagaMiddleware();

const middleWare = [sagaMiddleware];

if (process.env.NODE_ENV !== "production") {
  middleWare.push(logger);
}
export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: [actions.SET_SENT],
      },
    }).concat(middleWare),
});
sagaMiddleware.run(sagas);
