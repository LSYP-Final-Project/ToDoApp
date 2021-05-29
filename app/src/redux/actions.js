import { ADD_TODO, TOGGLE_TODO, SET_FILTER, GET_USERS } from "./actionTypes";
import Axios from "axios";
import { UsersService } from "../services";

let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({ 
  type: SET_FILTER,
  payload: { filter }
});

export const fetchUsers = () => {
  
  return async (dispatch, getState) => {
    const users = await UsersService.getUsers()

    dispatch({
      type: GET_USERS,
      payload: users
    })
  }
}
