import React, { Component } from 'react'

class NewMovieForm extends Component {

	constructor(){
		super()
		this.state = {
			movie: {
				id: '',
				title: '',
				year: ''
			}
		}
	}

	updateMovie(event){
		let updated = Object.assign({}, this.state.movie)
		updated[event.target.id] = event.target.value
		this.setState({
			movie: updated
		})
	}

	addMovie(event){
		event.preventDefault()
		console.log(this.state.movie)
		this.props.onAdd(this.state.movie)
	}

	render(){
		return(
			<form>
				<div className="form-group">
					<label>ID</label>
					<input className="form-control" onChange={this.updateMovie.bind(this)} id="id" type="text" placeholder="ID" />
				</div>
				<div className="form-group">
					<label>Title</label>
					<input className="form-control" onChange={this.updateMovie.bind(this)} id="title" type="text" placeholder="Title" />
				</div>
				<div className="form-group">
					<label>Year</label>
					<input className="form-control" onChange={this.updateMovie.bind(this)} id="year" type="text" placeholder="Year" />
				</div>
				<button onClick={this.addMovie.bind(this)} className="btn btn-default">Add</button>
			</form>
		)
	}
}

export default NewMovieForm