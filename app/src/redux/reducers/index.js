import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
import users from './users';
import sprints from './sprints'
import comments from "./comments";

export const rootReducer = combineReducers({ todos, comments, visibilityFilter, users, sprints});
