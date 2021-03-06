import { GET_USER_TODOS } from "../actionTypes";
export const SELECT_TASK_ID = "SELECT_TASK_ID";
export const ADD_TODO = "ADD_TODO";
export const GET_TODOS = "GET_TODOS";
export const FETCH_TODOS = "FETCH_TODOS";
export const TODOS_ERROR = "TODOS_ERROR";
export const SEARCH_TODOS = "SEARCH_TODOS";
export const SORT_TODOS = "SORT_TODOS";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";

export const setTodos = (todos) => ({
	type: GET_TODOS,
	payload: todos,
});

export const searchTodos = ( query, filterType ) => ({
	type: SEARCH_TODOS,
	payload: { query, filterType }
});

export const sortTodos = ( filterType ) => ({
	type: SORT_TODOS,
	payload: { sortBy: filterType }
});

export const searchSuccess = (results) => ({
   type: SEARCH_SUCCESS,
   payload: {results}
});

export const selectTaskId = (id) => ({
	type: SELECT_TASK_ID,
	payload: {
		id,
	},
});

export const todosError = (error) => ({
    type: TODOS_ERROR, payload: { error }
})

const initialState = {
	tasks: [],
    selectedId: null,
    selectedUserTasks: []
};

const todos = (state = initialState, action) => {
	switch (action.type) {
		case GET_TODOS: {
			return {
				...state,
				tasks: action.payload,
			};
		}
      case SEARCH_SUCCESS: {
			return {
				...state,
				tasks: action.payload.results,
			};
		}
		case ADD_TODO: {
			return {
				...state,
				tasks: [...state, action.payload.draft],
			};
		}
		case SELECT_TASK_ID: {
			return {
				...state,
				selectedId: action.payload.id,
			};
		}
		case TODOS_ERROR: return {
            ...state, 
			message: action.payload.error?.message,
        }
		case GET_USER_TODOS: {
			return {
			  ...state,
			  selectedUserTasks: action.payload,
			}
		}
		default:
			return state;
	}
};
export default todos;

// selectors
export const getAllTodos = (state) => state.todos.tasks;
export const getUserTasks = (state) => state.todos.tasks.filter(t => t.userId === 1) // podmienić na state.user.userId
export const getLatestTasks = (state) => state.todos.tasks.sort((a,b) => a.createdAt + b.createdAt)
export const getTodo = (state) => {
   return state.todos.tasks.find(t => t.id === state.todos.selectedId);
};
