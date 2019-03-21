import {SET_CURRENT_USER} from "../actionTypes";

const DEFAULT_STATE = {
	isAuthenticated: false,
	user: {}
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SET_CURRENT_USER:
			// !! casts to boolean
			return {isAuthenticated: !!Object.keys(action.user).length, user: action.user};
		default:
			return state;
	}
}