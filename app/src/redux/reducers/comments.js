import { CommentsService } from "Services";
import { SELECT_TASK_ID } from "./todos";

//actions types
export const ADD_COMMENT = "ADD_COMMENT";
export const SELECT_COMMENT_ID = "SELECT_COMMENT_ID";
export const GET_COMMENTS = "GET_COMMENTS";
export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const COMMENTS_ERROR = "COMMENTS_ERROR";

export const setComments = (comments) => ({
	type: GET_COMMENTS,
	payload: comments,
});

export const commentsError = (error) => ({
	type: COMMENTS_ERROR,
	payload: { error },
});

//actions
export const addComment = (comment) => ({
	type: ADD_COMMENT,
	payload: {
		comment,
	},
});

export const selectCommentId = (id) => ({
	type: SELECT_COMMENT_ID,
	payload: {
		id,
	},
});

const initialState = {
	comments: [],
	selectedId: null,
	message: null,
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
				comments: [...state.comments, action.payload.comment],
			};
		}
		case SELECT_TASK_ID: {
			return {
				...state,
				selectedId: action.payload.id,
			};
		}
		case COMMENTS_ERROR:
			return {
				...state,
				message: action.payload.error?.message,
			};
		default:
			return state;
	}
};
export default comments;

// selectors
export const getAllComments = (state) => state.comments.comments;
export const getLatestComments = (state) => state.comments.comments.sort((a, b) => a.createdAt + b.createdAt);
export const getTaskComments = (state) => {
	return state.comments.comments.filter((c) => c.taskId === state.comments.selectedId);
};
