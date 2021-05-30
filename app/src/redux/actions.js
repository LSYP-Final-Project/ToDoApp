import { SET_FILTER, GET_USERS } from "./actionTypes";
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

