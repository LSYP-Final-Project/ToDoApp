import { applyMiddleware, createStore, compose } from "redux";
import { rootReducer } from "./reducers";
import createSagaMiddleware from 'redux-saga'
import thunk from "redux-thunk";
import {todosSaga} from 'Core/sagas/todosSages'
import {commentsSaga} from 'Core/sagas/commentsSages';

const sagaMiddleware = createSagaMiddleware()

const storeEnhancer = compose(applyMiddleware(thunk),applyMiddleware(sagaMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default createStore(rootReducer, storeEnhancer);

sagaMiddleware.run(todosSaga);
sagaMiddleware.run(commentsSaga);