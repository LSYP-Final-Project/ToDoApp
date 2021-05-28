import { ADD_TODO, TOGGLE_TODO, SET_FILTER, SELECT_TASK_ID, ADD_COMMENT, SELECT_COMMENT_ID } from "./actionTypes";

let nextTodoId = new Date();

//todos
export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: nextTodoId,
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });

export const selectTaskId = id => ({
   type: SELECT_TASK_ID,
   payload: {
     id
   }
 });

// comments
export const addComment = draft => ({
   type: ADD_COMMENT,
   payload: {
     draft
   }
 });

 export const selectCommentId = id => ({
   type: SELECT_COMMENT_ID ,
   payload: {
     id
   }
 });