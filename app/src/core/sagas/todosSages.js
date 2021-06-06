import { call, put, takeLatest } from "redux-saga/effects";
import { TodosService } from "Services";
import { setTodos, searchSuccess, todosError, GET_TODOS, SEARCH_TODOS, SORT_TODOS, FETCH_TODOS } from "Redux/reducers/todos";

function* loadTodos() {
	try {
		const results = yield call(TodosService.getTodos);
		yield put(setTodos(results));
	} catch (error) {
		yield put(todosError(error));
	}
}

function* searchingTodos(action) {
	try {
		const results = yield call(TodosService.getSearchTodos, action.payload.query, action.payload.filterType);
		yield put(searchSuccess(results));
	} catch (error) {
		yield put(todosError(error));
	}
}

function* sortTodos(action) {
	try {
		const results = yield call(TodosService.getSortTodos, action.payload.sortBy);
		yield put(searchSuccess(results));
	} catch (error) {
		yield put(todosError(error));
	}
}

export function* todosSaga() {
	yield takeLatest(FETCH_TODOS, loadTodos);
	yield takeLatest(SEARCH_TODOS, searchingTodos);
	yield takeLatest(SORT_TODOS, sortTodos);
	
}
