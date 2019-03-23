import rootReducer from "./reducers";
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";

export function configureStore() {
	// store
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	return createStore(
		rootReducer,
		composeEnhancers(applyMiddleware(thunk)
		));
}