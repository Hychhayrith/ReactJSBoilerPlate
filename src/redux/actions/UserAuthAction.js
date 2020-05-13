import axios from 'axios';

// NOTE: Internal Modules
import API from '../../constants/API';

export const getData = () => async (dispatch) => {
	const headers = {
		'Content-Type': 'application/json',
		accessToken: API.accessToken
	};

	const request = axios({
		method: 'GET',
		url: API.baseURL,
		headers: headers
	});

	request.then(({ data }) => {
		dispatch({
			type: 'ADFAF',
			payload: {}
		});
	});
};
