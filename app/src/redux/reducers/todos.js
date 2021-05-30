export const SELECT_TASK_ID = "SELECT_TASK_ID";
export const ADD_TODO = "ADD_TODO";

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
			createdAt: 1621508357,
		},
		{
			sprintId: 1,
			description: "Description Lorem ipsum dolor sit amet.",
			userId: 2,
			id: 2,
			title: "Zostać mistrzem Reacta",
			status: "done",
			createdAt: 1621858957,
		},
		{
			sprintId: 1,
			description: "Description Lorem ipsum dolor sit amet.",
			userId: 3,
			id: 3,
			title: "Zrobić naleśniki z musem truskawkowym",
			status: "todo",
			createdAt: 1621940377,
		},
	],
	selectedId: null,
};

const todos = (state = initialState, action) => {
	switch (action.type) {
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
