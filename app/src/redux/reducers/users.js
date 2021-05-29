import { GET_USERS } from "../actionTypes";

const initState = []
const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_USERS:
            return action.payload
        default:
            return state
    }
}

export default usersReducer