import React, { Component } from 'react'
import { Nav } from './'

class Main extends Component {
	render(){
		return(
			<div className="container">
				<Nav/>
				<div className="container">
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default Main

