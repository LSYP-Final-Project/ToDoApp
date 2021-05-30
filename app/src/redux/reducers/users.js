import { GET_USERS, GET_USER } from "../actionTypes";

const initState = {
    items: [],
    selectedUser: {}
}

const usersReducer = (
    state = initState,
    action
) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                items: action.payload
            }
        case GET_USER:
            return {
                ...state,
                selectedUser: action.payload
            }
        default:
            return state
    }
}

export default usersReducer