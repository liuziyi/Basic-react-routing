import constants from '../constants'

var initialState = {
	movies: null
}

export default (state = initialState, action) => {

	switch(action.type){
		case constants.MOVIES_RECEIVED:
			// console.log('REDUCER: ' + JSON.stringify(action.movies))
			let updated = Object.assign({},state)
			updated['movies'] = action.movies
			return updated 
		case constants.MOVIE_CREATED:
			let updatedList = (updated['list'] == null) ? [] : Object.assign([], updated['list'])
			updatedList.push(action.movie)
			return updated
		default:
			return state
	}

}