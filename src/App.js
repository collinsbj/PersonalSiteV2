import React, { Component } from "react"
// import Stars from "./components/stars.js"
import vueLogo from "./assets/vue-logo.png"
// import Quotes from "./components/quotes.js"
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

	// handleMouseMove(e) {
	// 	this.setState({
	// 		offsetX: e.nativeEvent.offsetX,
	// 		offsetY: e.nativeEvent.offsetY
	// 	})
	// }

	handleArrowClick() {
		document.querySelector("#page2").scrollIntoView({
			behavior: "smooth"
		})
	}

	render() {
		return (
			<div className="App">
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
				{/* <div className="page">
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
					<div
						className="selector-text" id="selector-text-1">
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
						<div onMouseOver={() => {
							var el = document.querySelector("#selector-1")
							el.classList.add("move-right")
						}
						}
						onMouseLeave={() => {
							var el = document.querySelector("#selector-1")
							el.classList.remove("move-right")
						}
						}
						className="selector" id="selector-1">
						</div>
						<div className="selector" id="selector-2">Section</div>
						<div className="selector" id="selector-3">Section</div>
						<div className="selector" id="selector-4">Section</div>
						<div className="selector" id="selector-5">Section</div>
					</div>
				</div>
				<div className="page" id="stars">
					<Stars offsetX={this.state.offsetX} offsetY={this.state.offsetY}></Stars>
				</div> */}
				<div className="page">
					<div className="absolute-center">
						<div id="name">BJ Collins</div>
						<div id="title-wrapper">
							<div id="list-wrapper">
								<div className="title" id="title-1">
									Software Engineer
								</div>
								<div className="title" id="title-2">
									Web Developer
								</div>
								<div className="title" id="title-3">
									Other Cool Sounding Titles!
								</div>
							</div>
						</div>
					</div>
					<i
						onClick={this.handleArrowClick.bind(this)}
						class="material-icons"
						id="page-arrow"
					>
						expand_more
					</i>
				</div>
				<div className="page" id="page2-buffer" />
				<div className="page" id="page2">
					<div id="tech-title-wrapper">
						<div id="tech-background" />
						<div id="tech-title">TECH</div>
					</div>
					<div className="absolute-center" id="tech-wrapper">
						<div className="box" id="box-1">
							Vue.js
							<div className="tech-cover" />
						</div>
						<div className="box" id="box-2">
							Vuex
							<div className="tech-cover" />
						</div>
						<div className="box" id="box-3">
							Vue <br /> Router
							<div className="tech-cover" />
						</div>
						<div className="box" id="box-4">
							Vuetify
							<div className="tech-cover" />
						</div>
						<div className="box" id="box-5">
							Git
							<div className="tech-cover" />
						</div>
						<div className="box" id="box-6">
							Github
							<div className="tech-cover" />
						</div>
						<div className="box" id="box-7">
							Node.js
							<div className="tech-cover" />
						</div>
						<div className="box" id="box-8">
							React
							<div className="tech-cover" />
						</div>
						<div className="box" id="box-9">
							Postgres
							<div className="tech-cover" />
						</div>
						<div className="box" id="box-10">
							Loopback
							<div className="tech-cover" />
						</div>
						<div className="box" id="box-11">
							Knex.js
							<div className="tech-cover" />
						</div>
						<div className="box" id="box-12">
							Bitbucket
							<div className="tech-cover" />
						</div>
						<div className="box" id="box-13">
							Sharepoint
							<div className="tech-cover" />
						</div>
						<div className="box" id="box-14">
							JIRA
							<div className="tech-cover" />
						</div>
						<div className="box" id="box-15">
							Slack
							<div className="tech-cover" />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App
