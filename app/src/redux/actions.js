import { SET_FILTER, ADD_USER, GET_USERS } from "./actionTypes";
import Axios from "axios";
import { UsersService } from "../services";

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

export const addUser = user => ({
  type: ADD_USER,
  payload: {
    id: new Date().getTime(),
    name: user.name,
    email: user.email,
    password: user.password,
  }
});
