import { call, put, takeLatest } from "redux-saga/effects";
import { TodosService } from "Services";
import { setTodos, searchTodos, searchSuccess, todosError, GET_TODOS, SEARCH_TODOS } from "Redux/reducers/todos";

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
		const results = yield call(TodosService.getSearchTodos, action.payload.query);
		yield put(searchSuccess(results));
	} catch (error) {
		yield put(todosError(error));
	}
}

export function* todosSaga() {
	yield takeLatest(GET_TODOS, loadTodos);
	yield takeLatest(SEARCH_TODOS, searchingTodos);
}
