import { SET_FILTER, GET_USERS, GET_USER, GET_USER_TODOS, GET_USER_START, GET_SPRINTS, ADD_USER} from "./actionTypes";
import { UsersService, TodosService, SprintsService } from "../Services";

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: { filter }
});

export const fetchUsers = (query) => {
  return async (dispatch) => {
    let users = [];
    if (query) {
      users = await UsersService.filterUsers(query)
    } else {
      users = await UsersService.getUsers()
    }
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

export const fetchSprints = () => {
  return async (dispatch, getState) => {
    const sprints = await SprintsService.getSprints();

    dispatch({
      type: GET_SPRINTS,
      payload: sprints
    })
  }
}

export const addUser = (user) => {

  return async (dispatch) => {

    const newUser = await UsersService.postUser(user)

    dispatch({
      type: ADD_USER,
      payload: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
      }
    })
  }
};
