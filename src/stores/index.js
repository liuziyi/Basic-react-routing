import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { moviesReducer } from '../reducers'

var store;

export default {

	initialize: () => {
		const reducers = combineReducers({
			movie: moviesReducer
		})

		store = createStore(
			reducers,
			applyMiddleware(thunk)
		)

		return store
	},
	currentStore: () => {
		return store 
	}

}

