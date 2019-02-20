import "./css/App.css"
import ProjectsPage from "./components/pages/Projects"
import React, { Component } from "react"
import SkillsPage from "./components/pages/Skills"
import TechPage from "./components/pages/Tech"
import WelcomePage from "./components/pages/Welcome"

class App extends Component {
	render() {
		return (
			<div className="App">
				<WelcomePage />
				<TechPage />
				<ProjectsPage />
				<SkillsPage />
			</div>
		)
	}
}

export default App
