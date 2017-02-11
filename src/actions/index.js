import constants from '../constants'
import { APIManager } from '../utils'

export default {

	moviesReceived: (movies) => {
		return {
			type: constants.MOVIES_RECEIVED,
			movies: movies
		}
	},
	addMovie: (movie) => {
		return (dispatch) => {
			APIManager
			.post('/api/movie', movie)
			.then((response) => {
				// console.log('addMovie: ' + JSON.stringify(response))
				dispatch({
					type: constants.MOVIE_CREATED,
					movie: response.result
				})
			})
			.catch((err) => {
				console.log(err)
			})
		}
	}

}