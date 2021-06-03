import { CommentsService } from "Services";
import { SELECT_TASK_ID } from "./todos";
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
export const addComment = draft => ({
   type: ADD_COMMENT,
   payload: {
     draft
   }
 });

 export const selectCommentId = id => ({
   type: SELECT_COMMENT_ID,
   payload: {
     id
   }
 });


const initialState = {
	comments: [],
   selectedId: null
};

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
