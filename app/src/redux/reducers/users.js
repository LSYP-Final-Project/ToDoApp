import { GET_USERS, GET_USER, GET_USER_START } from "../actionTypes";

const initState = {
    items: [],
    selectedUser: {},
    isLoading: false
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
        case GET_USER_START:
            return {
                ...state,
                selectedUser: null,
                isLoading: true
            }
        case GET_USER:
            return {
                ...state,
                selectedUser: action.payload,
                isLoading: false
            }
        default:
            return state
    }
}

export default usersReducer