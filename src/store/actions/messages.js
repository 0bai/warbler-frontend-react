import {LOAD_MESSAGES} from "../actionTypes";
import {call as apiCall} from '../../services/api';
import {addError} from "./errors";

export const loadMessages = messages => {
	return {
		type: LOAD_MESSAGES,
		messages
	};
};

export const fetchMessages = () => {
	return dispatch => {
		apiCall('get', '/api/messages')
			.then((res) => dispatch(loadMessages(res)))
			.catch(e => addError(e.message));
	};
};

export const postNewMessage = text => (dispatch, getState) => {
	let {currentUser} = getState();
	const id = currentUser.user.id;
	return apiCall('post', `api/users/${id}/messages`, {text})
		.then(res => {
		})
		.catch(e => dispatch(addError(e)));
};