import axios from "axios";

export function setTokenHeader(token) {
	if (token) {
		axios.defaults.headers.common[ 'Authorization' ] = `Bearer ${token}`;
	} else {
		delete axios.defaults.headers.common[ 'Authorization' ];
	}
}

export function call(method, path, data) {
	return new Promise((resolve, reject) => {
		return axios[ method ](path, data)
			.then(res => resolve(res.data))
			.catch(e => {
				reject(e.response.data);
			});
	});
}