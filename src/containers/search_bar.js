import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: ''};

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	//when the user clicks submits the form we will capure the input
	//and save it to state.term
	onInputChange(event) {
		this.setState({term: event.target.value})
	}

	onFormSubmit(event) {
		event.preventDefault();

		//this will pass the search input to the action, clear input
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	}


	render(){
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Get a five-day forcast"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange} />
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		)
	}
}

//hook up action to SearchBar
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

//pass in null because we don't need to worry about state
export default connect(null, mapDispatchToProps)(SearchBar);