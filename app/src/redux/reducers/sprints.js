import { GET_SPRINTS, SELECT_SPRINT_ID } from '../actionTypes';

export const selectedSprintId = (id) => ({
	type: SELECT_SPRINT_ID,
	payload: {
		id,
	},
});


const initState = {
    sprints: [],
    selectedId: null,
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
        default:
            return state
    }
}

export default sprintsReducer;

export const getAllSprints = (state) => state.sprints.sprints
export const getSprint = (state) => {
  return state.sprints.sprints.find((s) => s.id === state.sprints.selectedId);
}

//takie cudo do wyjęcia opisu taska:
export const getTaskDescription = (state) =>{
  return state.sprints.sprints.tasks.find((s) => s.id === state.sprints.tasks.task_id);
}