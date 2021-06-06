import { call, put, takeLatest } from "redux-saga/effects";
import { CommentsService } from "Services";
import {setComments, commentsError, FETCH_COMMENTS } from "Redux/reducers/comments";

function* loadComments() {
	try {
		const results = yield call(CommentsService.getComments);
		yield put(setComments(results));
	} catch (error) {
		yield put(commentsError(error));
	}
}

export function* commentsSaga() {
	yield takeLatest(FETCH_COMMENTS, loadComments);
}
