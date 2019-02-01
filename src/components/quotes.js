import React, { Component } from "react"

class Quotes extends Component {
	constructor(props) {
		super(props)
		this.state = {
			quotes: []
		}
	}

	componentDidMount() {
		// setInterval(() => {
		// 	var quotes = this.state.quotes
		// 	quotes.push(<div className="quote">
		// 		Hi
		// 	</div>)
		// 	this.setState({ quotes: quotes })
		// }, 500)
	}

	render() {

		return (
			<div style={{ display: "flex", "flex-flow": "row wrap", "justify-content": "flex-start", "align-items": "center" }} >
				{this.state.quotes}
			</div>
		)
	}
}

export default Quotes