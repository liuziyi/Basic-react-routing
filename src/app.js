import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Main } from './components/layouts'
import { Movies, NewMovie } from './components/containers'
import { MovieDetails } from './components/views'
import { Provider } from 'react-redux'
import store from './stores'


ReactDOM.render(
	<Provider store={ store.initialize() }>
		<Router history={hashHistory}>
			<Route path="/" component={Main}>
				<IndexRoute component={Movies} />
				<Route path="add" component={NewMovie} />
				<Route path="/:id" component={MovieDetails} />
			</Route>
		</Router>
	</Provider>, 
	document.getElementById('root')
)



