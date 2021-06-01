import { GET_SPRINTS } from '../actionTypes';

const initState = []

const sprintsReducer = (state = initState, action) => {
    switch (action.type) { 
        case GET_SPRINTS:
            return action.payload
        default:
            return state
    }
}

export default sprintsReducer;

export const getAllSprints = (state) => state.sprints