import {combineReducers, configureStore} from '@reduxjs/toolkit'
import thunk from "redux-thunk"
import {converterReducer} from "./converterReducer";

const reducers = combineReducers({ converter: converterReducer });
export type State = ReturnType<typeof reducers>;

const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
})

export type AppDispatch = typeof store.dispatch;

export default store;