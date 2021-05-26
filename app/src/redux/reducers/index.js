import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";

export const rootReducer = combineReducers({ todos, visibilityFilter });
