import rootReducer from "./reducers";
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";

export function configureStore() {
	// store
	return createStore(
		rootReducer,
		compose(applyMiddleware(thunk),
			window.devToolsExtension ? window.devToolsExtension() : f => f)
	);
}