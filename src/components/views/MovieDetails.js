import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

class MovieDetails extends Component {
	render(){
		const movies = this.props.movies || []
		const title = this.props.params.title
		
		return(
			<div>
				<h1>{this.props.params.title}</h1>
				<hr/>
			</div>
		)
	}
}

const stateToProps = (state) => {
	return {
		movies: state.movie.movies
	}
}

export default connect(stateToProps)(MovieDetails)