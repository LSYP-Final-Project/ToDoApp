import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
import users from './users';
import sprints from './sprints'

export default combineReducers({ todos, visibilityFilter, users, sprints});
