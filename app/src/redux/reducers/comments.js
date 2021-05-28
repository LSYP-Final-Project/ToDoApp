import { ADD_COMMENT, SELECT_TASK_ID } from "../actionTypes";

const initialState = {
	comments: [
      { id: 1, userId: 2, taskId: 1, content: "Good job!", createdAt: 1621853932 },
      { id: 1, userId: 2, taskId: 1, content: "Easy job!", createdAt: 1621853954 },
      { id: 1, userId: 2, taskId: 1, content: "Be careful", createdAt: 1621853953 },
      { id: 2, userId: 1, taskId: 2, content: "Bad job.", createdAt: 1621853964 },
      { id: 2, userId: 1, taskId: 2, content: "Great!", createdAt: 1621853912 },
      { id: 2, userId: 1, taskId: 2, content: "Error on MainPage!", createdAt: 1621853951 },
      { id: 3, userId: 3, taskId: 3, content: "Nothing special...", createdAt: 1621853942 },
      { id: 3, userId: 3, taskId: 3, content: "That was so  good...", createdAt: 1621853954 },
      { id: 3, userId: 3, taskId: 3, content: "Um....", createdAt: 1621853955 },
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
export const getTaskComments = (state) => {
   return state.comments.comments.filter(c => c.taskId === state.comments.selectedId);
};
