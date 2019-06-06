import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterLogic";
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
  counter: counterReducer
});


export const store = createStore(
  reducers,
  composeWithDevTools()
);
