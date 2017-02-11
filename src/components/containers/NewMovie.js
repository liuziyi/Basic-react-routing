import React, { Component } from 'react'
import { NewMovieForm } from '../views'
import { connect } from 'react-redux'
import actions from '../../actions'

class NewMovie extends Component {

	add(movie){
		// console.log('NewMovie: ' + JSON.stringify(movie))
		this.props.addMovie(movie)
	}

	render(){
		return(
			<div>
				<h1 className="text-center">Add New Movie</h1>
				<hr />
				<NewMovieForm onAdd={this.add.bind(this)}/>
			</div>
		)
	}
}

const stateToProps = (state) => {
	return {
		movies: state.movie.movies
	}
}

const dispatchToProps = (dispatch) => {
	return {
		addMovie: (movie) => dispatch(actions.addMovie(movie))
	}
}

export default connect(stateToProps,dispatchToProps)(NewMovie)