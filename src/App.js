import React, { Component } from "react"
import Stars from "./components/stars.js"
import Quotes from "./components/quotes.js"
import "./App.css"

class App extends Component {
	constructor(props) {
		super(props)
		this.state = { offsetX: 0, offsetY: 0 }
	}

	// componentDidMount() {
	// 	setTimeout(() => {
	// 		document.getElementById("begin-button").classList.add("begin-button-show")
	// 	}, 13000)
	// }

	handleMouseMove(e) {
		this.setState({
			offsetX: e.nativeEvent.offsetX,
			offsetY: e.nativeEvent.offsetY
		})
	}

	render() {
		return (
			<div className="App" onMouseMove={this.handleMouseMove.bind(this)}>
				{/* <div className="page">
					<div className="header-parent">
						<div className="first-name-wrapper">
							<div className="header-name first-name">BJ</div>
						</div>
						<div className="last-name-wrapper">
							<div className="background-wrapper">
								<div className="header-name last-name">Collins</div>
							</div>
						</div>
					</div>
					<div id="title-wrapper">
						<div className="job-title job-title-1">
							Software Engineer
						</div>
						<div className="job-title job-title-2">/</div>
						<div className="job-title job-title-2">
							Web Developer
						</div>
						<div className="job-title job-title-3">/</div>
						<div className="job-title job-title-3">
							Other cool sounding titles
						</div>
					</div>
					<div id="welcome-text">
						Welcome!
					</div>
					<div className="absolute-center" id="begin-button" onClick={() => { document.getElementById("stars").scrollIntoView({ behavior: "smooth" }) }}>
					</div>
					<div className="absolute-center" id="begin-button-text" onClick={() => { document.getElementById("stars").scrollIntoView({ behavior: "smooth" }) }}>
						Embark
					</div>
				</div> */}
				<div className="page">
					<div id="first-name-wrapper">
						<div id="first-name-inner">
							BJ
						</div>
					</div>
					<div id="last-name-wrapper">
						<div id="last-name-inner">
							Collins
						</div>
					</div>
					<div id="title-wrapper">
						<div className="job-title job-title-1">
							Software Engineer
						</div>
						<div className="job-title job-title-2">/</div>
						<div className="job-title job-title-2">
							Web Developer
						</div>
						<div className="job-title job-title-3">/</div>
						<div className="job-title job-title-3">
							Other cool sounding titles
						</div>
					</div>
					<div className="selector-text" id="selector-text-1">
						Projects
					</div>
					<div className="selector-text" id="selector-text-2">
						Experience
					</div>
					<div className="selector-text" id="selector-text-3">
						Technologies
					</div>
					<div className="selector-text" id="selector-text-4">
						Skills
					</div>
					<div className="selector-text" id="selector-text-5">
						Education
					</div>
					<div id="selector-wrapper">
						<div className="selector" id="selector-1">

						</div>
						<div className="selector" id="selector-2">Section</div>
						<div className="selector" id="selector-3">Section</div>
						<div className="selector" id="selector-4">Section</div>
						<div className="selector" id="selector-5">Section</div>
					</div>
				</div>
				<div className="page" id="stars">
					<Stars offsetX={this.state.offsetX} offsetY={this.state.offsetY}></Stars>
					<Quotes></Quotes>
				</div>
			</div>
		)
	}
}

export default App
