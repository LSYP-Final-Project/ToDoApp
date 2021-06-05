import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
import users from './users';
import infoSprints from './sprints'
import comments from "./comments";

export const rootReducer = combineReducers({ todos, comments, visibilityFilter, users, infoSprints});
