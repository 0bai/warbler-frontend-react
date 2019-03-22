import axios from "axios";

export function call(method, path, data) {
	return new Promise((resolve, reject) => {
		return axios[ method ](path, data)
			.then(res => resolve(res.data))
			.catch(e => reject(e.response.data.error));
	});
}