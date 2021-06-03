import { call, put, takeLatest } from "redux-saga/effects";
import { TodosService } from "Services";
import { setTodos, todosError, GET_TODOS } from "Redux/reducers/todos";

function* loadTodos() {
	try {
		const results = yield call(TodosService.getTodos);
		yield put(setTodos(results));
	} catch (error) {
		yield put(todosError(error));
	}
}

export function* todosSaga() {
	yield takeLatest(GET_TODOS, loadTodos);
}
