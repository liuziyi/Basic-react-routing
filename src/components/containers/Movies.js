import React, { Component } from 'react'
import { Link } from 'react-router'
import superagent from 'superagent'
import { connect } from 'react-redux'
import actions from '../../actions'
import { APIManager } from '../../utils'

class Movies extends Component {

	componentDidMount(){
		// console.log('componentDidMount')
		APIManager
		.get('/api/movie')
		.then((response) => {
			const movies = response.results
			// console.log('From components/containers/Movies (APIManager): '+JSON.stringify(movies))
			this.props.moviesReceived(movies)
		})
		.catch((err) => {
			console.log(err)
			return
		})

		// superagent
		// .get('/api/movie')
		// .query(null)
		// .set('Accept', 'application/json')
		// .end((err,response) => {
		// 	if(err){
		// 		console.log(err)
		// 		return 
		// 	}
		// const movies = response.body.results
		// 	console.log('From components/containers/Movies (superagent): '+JSON.stringify(movies))
		// 	this.props.moviesReceived(movies)
		// })
	}

	render(){
		const movies = this.props.movies || []

		// console.log(movies)
		
		return(
			<div>
				<h1>List of Movies</h1>
				<hr />
				<ol>
					{
						movies.map((movie,i) => {
							return (
								<li key={movie._id}>
									<div>
										<h4><Link to={"/"+movie.id}>{movie.title}</Link></h4>
									</div>
								</li>
							)
						})
					}
				</ol>
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
		moviesReceived: (movies) => dispatch(actions.moviesReceived(movies))
	}
}

export default connect(stateToProps,dispatchToProps)(Movies)