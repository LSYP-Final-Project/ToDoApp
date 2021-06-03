import { ADD_TODO, TOGGLE_TODO, SET_FILTER, GET_USERS, GET_USER, GET_USER_TODOS, GET_USER_START, GET_USER_TODOS_START } from "./actionTypes";
import { UsersService, TodosService } from "../services";

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
};

export const fetchUser = (id) => {

  return async (dispatch) => {
    dispatch({
      type: GET_USER_START
    })
    const user = await UsersService.getUser(id)

    dispatch({
      type: GET_USER,
      payload: user
    })
  }
};

export const fetchUserTodos = (userId) => {

  return async (dispatch) => {

    const userTodos = await TodosService.getUserTodos(userId)
  
    dispatch({
      type: GET_USER_TODOS,
      payload: userTodos
    })
  }
};