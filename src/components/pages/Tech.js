import React, { Component } from "react"

class Tech extends Component {
	constructor(props) {
		super(props)
		this.state = { lightUp: false }
		this.handleDarkClick = this.handleDarkClick.bind(this)
	}

	handleDarkClick() {
		this.setState({
			lightUp: !this.state.lightUp
		})
	}
	render() {
		return (
			<div className="page" id="tech-page">
				<div id="tech-title">
					My <br />
					Tech<span>!</span>
				</div>
				<div onClick={this.handleDarkClick} id="its-dark">
					It's too {this.state.lightUp ? "bright" : "dark"} in here
					<span>{"<"}</span>
					<span>{"<"}</span>
					<span>{"<"}</span>
				</div>
				<div
					className={
						"absolute-center " +
						(this.state.lightUp ? "light-up" : "")
					}
					id="tech-wrapper"
				>
					<div className="glowing-text">Bitbucket</div>
					<div className="glowing-text">Git</div>
					<div className="glowing-text">Github</div>
					<div className="glowing-text">Knex.js</div>
					<div className="glowing-text">JIRA</div>
					<div className="glowing-text">Loopback</div>
					<div className="glowing-text">Node.js</div>
					<div className="glowing-text">Postgres</div>
					<div className="glowing-text">React</div>
					<div className="glowing-text">Sharepoint</div>
					<div className="glowing-text">Slack</div>
					<div className="glowing-text">Vue.js</div>
					<div className="glowing-text half-line-height">
						Vue
						<br />
						Router
					</div>
					<div className="glowing-text">Vuetify</div>
					<div className="glowing-text">Vuex</div>
				</div>
			</div>
		)
	}
}

export default Tech
