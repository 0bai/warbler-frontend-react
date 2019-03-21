import rootReducer from "reducers";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

export function configureStore() {
	// store
	return createStore(
		rootReducer,
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	);
}