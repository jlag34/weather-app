import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather'

//assigns the value of WeatherReducer to state.weather
//will be used for WeatherList
const rootReducer = combineReducers({
	weather: WeatherReducer
});

export default rootReducer;