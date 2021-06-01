import { ADD_COMMENT, SELECT_TASK_ID } from "../actionTypes";

const initialState = {
	comments: [
      { id: 1, userId: 2, taskId: 1, content: "Good job!", createdAt: 1621559776418 },
      { id: 2, userId: 2, taskId: 1, content: "Easy job!", createdAt: 1612569776418 },
      { id: 3, userId: 2, taskId: 1, content: "Be careful", createdAt: 1613569776418 },
      { id: 4, userId: 1, taskId: 2, content: "Bad job.", createdAt: 1616569776418 },
      { id: 5, userId: 1, taskId: 2, content: "Great!", createdAt: 1622069776418 },
      { id: 6, userId: 1, taskId: 2, content: "Error on MainPage!", createdAt: 1602569776418 },
      { id: 7, userId: 3, taskId: 3, content: "Nothing special...", createdAt: 1619569776418 },
      { id: 8, userId: 3, taskId: 3, content: "That was so  good...", createdAt: 1617569776418 },
      { id: 9, userId: 3, taskId: 3, content: "Um....", createdAt: 1605569776418 },
   ],
   selectedId: null
};

const comments = (state = initialState, action) => {
	switch (action.type) {
		case ADD_COMMENT: {
			return {
            ...state,
				tasks: [...state, action.payload.draft],
			};
		}
      case SELECT_TASK_ID: {
			return {
				...state,
            selectedId: action.payload.id
			};
		}
		default:
			return state;
	}
};
export default comments;

// selectors
export const getAllComments = (state) => state.comments.comments;
export const getLatestComments = (state) => state.comments.comments.sort((a,b) => a.createdAt + b.createdAt)
export const getTaskComments = (state) => {
   return state.comments.comments.filter(c => c.taskId === state.comments.selectedId);
};
