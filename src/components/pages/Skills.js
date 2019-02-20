import React, { Component } from "react"

class Skills extends Component {
	render() {
		return (
			<div className="page" id="skills-page">
				<div className="left-bar">
					<div className="skill">
						<div className="ball-blurry" />
						<div className="ball-sharp" />
						<div className="skill-title">
							Scrum Master Certified
						</div>
					</div>
					<div className="skill">
						<div className="ball-blurry" />
						<div className="ball-sharp" />
						<div className="skill-title">Material Design</div>
					</div>
					<div className="skill">
						<div className="ball-blurry" />
						<div className="ball-sharp" />
						<div className="skill-title">Pair Programming</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Skills
