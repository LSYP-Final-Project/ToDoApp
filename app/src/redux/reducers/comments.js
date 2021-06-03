import { CommentsService } from "Services";
import { SELECT_TASK_ID } from "./todos";

//actions types
export const ADD_COMMENT = 'ADD_COMMENT';
export const SELECT_COMMENT_ID = 'SELECT_COMMENT_ID';
export const GET_COMMENTS = 'GET_COMMENTS';

export const fetchComments = () => {
	return async (dispatch, getState) => {
		const comments = await CommentsService.getComments();

		dispatch({
			type: GET_COMMENTS,
			payload: comments,
		});
	};
};

//actions
export const addComment = comment => ({
   type: ADD_COMMENT,
   payload: {
      comment
   }
 });

 export const selectCommentId = id => ({
   type: SELECT_COMMENT_ID,
   payload: {
     id
   }
 });


const initialState = {
    comments: [
	      { id: 1, userId: 2, taskId: 1, content: "Good job!", createdAt: 1621559776418 },
	      { id: 2, userId: 2, taskId: 1, content: "Easy job!", createdAt: 1612569776418 },
	      { id: 3, userId: 2, taskId: 1, content: "Be careful", createdAt: 1613569776418 },
	      { id: 4, userId: 1, taskId: 2, content: "Bad job.", createdAt: 1616569776418 },
	      { id: 5, userId: 1, taskId: 2, content: "Great!", createdAt: 1622069776418 },
	      { id: 6, userId: 1, taskId: 2, content: "Error on MainPage!", createdAt: 1602569776418 },
	      { id: 7, userId: 3, taskId: 3, content: "Nothing special...", createdAt: 1619569776418 },
	      { id: 8, userId: 3, taskId: 3, content: "That was so  good...", createdAt: 1617569776418 },
	      { id: 9, userId: 3, taskId: 3, content: "Um....", createdAt: 1605569776418 },
	   ],
   selectedId: null
};

// reducer
const comments = (state = initialState, action) => {
	switch (action.type) {
      case GET_COMMENTS: {
			return {
            ...state,
				comments: action.payload,
			};
		}
		case ADD_COMMENT: {
			return {
            ...state,
            comments: [...state.comments, action.payload.comment]
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
