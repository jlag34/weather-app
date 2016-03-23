import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
	switch(action.type) {
		case FETCH_WEATHER: 
			return state.concat([action.payload.data]);
	}
	return state;
}

//put all of our data in an array
//action.payload.data will be our new data
//make sure to use concat to not mutate our array, return new version of state
// can use  'return [action.payload.data, ...state]' as well