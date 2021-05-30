import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
import comments from "./comments";
import users from './users';

export default combineReducers({ todos, visibilityFilter, users, comments});
