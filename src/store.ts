import {combineReducers, configureStore} from '@reduxjs/toolkit'
import converterReducer from "./Converter/converterReducer";
import thunk from "redux-thunk"

const reducers = combineReducers({ converter: converterReducer });
export type State = ReturnType<typeof reducers>;

const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
})

export default store;