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