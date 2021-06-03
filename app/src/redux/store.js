import { applyMiddleware, createStore, compose } from "redux";
import { rootReducer } from "./reducers";
import thunk from "redux-thunk";

const storeEnhancer = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default createStore(rootReducer, storeEnhancer);

//

// const store = createStore(
//     reducer, /* preloadedState, */
//  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   );