import { GET_SPRINTS, SELECT_SPRINT_ID, UPDATE_SPRINT_TITLE, DELETE_SPRINT } from '../actionTypes';

export const selectedSprintId = (id) => ({
	type: SELECT_SPRINT_ID,
	payload: {
		id,
	},
});

export const updateSprintName = (name) => ({
  type: UPDATE_SPRINT_TITLE,
  payload: {
    name,
  }
})


const initState = {
    sprints: [],
    selectedId: null,
    name: "SELECT SPRINT",
}    

const sprintsReducer = (
  state = initState, 
  action
  ) => {
    switch (action.type) { 
        case GET_SPRINTS:
            return {
              ...state,
              sprints: action.payload
            }
        case SELECT_SPRINT_ID:
            return {
              ...state,
              selectedId: action.payload.id
            }
        case UPDATE_SPRINT_TITLE:
            return {
              ...state,
              name: action.payload.name,
            }
        default:
            return state
    }
}

export default sprintsReducer;

export const getAllSprints = (state) => state.infoSprints.sprints
export const getSprint = (state) => {
  return state.infoSprints.sprints.find((s) => s.id === state.infoSprints.selectedId);
}
export const getSprintName = (state) => state.infoSprints.name;