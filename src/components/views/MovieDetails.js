import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

class MovieDetails extends Component {
	render(){
		
		const movies = this.props.movies || []
		const id = this.props.params.id
		
		return(
			<div>
				<div>
					{
						movies.map((movie,i) => {
							if(movie.id == id){
								return (
									<div key={movie._id}>
										<h1 className="text-center">{movie.title}</h1>
										<hr />
										<p>Year: {movie.year}</p>
									</div>
								)
							}
						})
					}
				</div>
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