import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
import comments from "./comments";

export const rootReducer = combineReducers({ todos, comments, visibilityFilter });
