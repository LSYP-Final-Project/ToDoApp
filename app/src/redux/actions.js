import { UsersService, SprintsService } from "Services";
import { SET_FILTER, ADD_USER, GET_USERS, GET_SPRINTS } from "./actionTypes";

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

export const fetchSprints = () => {
  return async(dispatch) => {
    const sprints = await SprintsService.getSprints();

    dispatch({
      type: GET_SPRINTS,
      payload: sprints
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