import { ADD_USER, GET_USERS } from "../actionTypes";

const initState = {
}

const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_USER: {
            const { id, name, email, password } = action.payload;
            return {
                ...state,
                [id]: {
                    id,
                    name,
                    email,
                    password,
                }
            };
        }
        case GET_USERS:
            return action.payload
        default:
            return state
    }
}

export default usersReducer