import { TodosService } from "Services";

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
	tasks: [
		{
			sprintId: 1,
			description: "Description Lorem ipsum dolor sit amet.",
			userId: 1,
			id: 1,
			title: "Zrobić Karpatkę",
			status: "inprogress",
			createdAt: 1522390525501,
		},
		{
			sprintId: 1,
			description: "Description Lorem ipsum dolor sit amet.",
			userId: 2,
			id: 2,
			title: "Zostać mistrzem Reacta",
			status: "done",
			createdAt: 1622390525501,
		},
		{
			sprintId: 1,
			description: "Description Lorem ipsum dolor sit amet.",
			userId: 3,
			id: 3,
			title: "Zrobić naleśniki z musem truskawkowym",
			status: "todo",
			createdAt: 1612190585501,
		},
	],
   selectedId: null
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
export const getUserTasks = (state) => state.todos.tasks.filter(t => t.userId === 1) // podmienić na state.user.userId
export const getLatestTasks = (state) => state.todos.tasks.sort((a,b) => a.createdAt + b.createdAt)
export const getTodo = (state) => {
   return state.todos.tasks.find(t => t.id === state.todos.selectedId);
};
