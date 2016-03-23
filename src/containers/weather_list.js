import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
	//for each city we get back, run this function on it
	//will create a new table row for each city
	renderWeather(cityData){
		const name = cityData.city.name;
		const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp*(9/5)-459.67);
		const pressures = cityData.list.map(weather => weather.main.pressure)
		const humidities = cityData.list.map(weather => weather.main.humidity)
		const { lon, lat } = cityData.city.coord;

		return (
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td><Chart data={temps} color="orange" units="F"/></td>
				<td><Chart data={pressures} color="blue" units="hPa"/></td>
				<td><Chart data={humidities} color="green" units="%" /></td>
			</tr>
		);
	}


	render(){
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (F)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}

//gives WeatherList access to the state
function mapStateToProps({ weather }) {
	return { weather };
}

//^ better ES6 way
// function mapStateToProps(state) {
// 	return { weather: state.weather};
// }

//connects mapStateToProps
export default connect(mapStateToProps)(WeatherList)