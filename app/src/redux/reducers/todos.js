import { TodosService } from "../../services";

export const SELECT_TASK_ID = "SELECT_TASK_ID";
export const ADD_TODO = "ADD_TODO";
export const GET_TODOS = "GET_TODOS";

export const fetchTodos = (searchText, filterType) => {
	return async (dispatch, getState) => {
		let todos = [];
		if (searchText) {
			todos = await TodosService.getSearchTodos(searchText);
		} else {
			todos = await TodosService.getTodos();
		}
		dispatch({
			type: GET_TODOS,
			payload: todos,
		});
	};
};

export const selectTaskId = (id) => ({
	type: SELECT_TASK_ID,
	payload: {
		id,
	},
});

const initialState = {
	tasks: [],
	selectedId: null,
};

const todos = (state = initialState, action) => {
	switch (action.type) {
		case GET_TODOS: {
			return {
				...state,
				tasks: action.payload,
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
		default:
			return state;
	}
};
export default todos;

// selectors
export const getAllTodos = (state) => state.todos.tasks;
export const getTodo = (state) => {
	return state.todos.tasks.find((t) => t.id === state.todos.selectedId);
};
