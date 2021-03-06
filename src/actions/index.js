import axios from 'axios'


//only included key to easily load example for Vuong. will destroy after
const API_KEY = '9aaf4ac82210993cb8c8124931f891b0';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	//payload is a promise, redux-promise middleware takes care of this before
	//being based to the reducer
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}