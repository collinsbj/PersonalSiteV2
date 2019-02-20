import React, { Component } from "react"

class Projects extends Component {
	render() {
		return (
			<div className="page" id="projects-page">
				<div id="projects-page-title">Projects</div>
				<div id="projects-wrapper">
					<div className="project-card">
						<div className="project-name">Provisionator</div>
						<input type="checkbox" name="" />
						<div className="toggle">+</div>
						<div className="project-description">
							<div className="project-description-bullet">
								Saved $2 million by greatly increasing the
								efficiency of on-boarding new hires
							</div>
							<div className="project-description-bullet-divider" />
							<div className="project-description-bullet">
								Allows insight into a previously opaque process
							</div>
						</div>
					</div>
					<div className="project-card">
						<div className="project-name">HR Employee Actions</div>
						<input type="checkbox" name="" />
						<div className="toggle">+</div>
						<div className="project-description">
							<div className="project-description-bullet">
								Removes significant company risk by assuring all
								terminations are processed securely and timely
							</div>
							<div className="project-description-bullet-divider" />
							<div className="project-description-bullet">
								Automates 40+ previously manual processes
							</div>
						</div>
					</div>
					<div className="project-card">
						<div className="project-name">Time & Attendance</div>
						<input type="checkbox" name="" />
						<div className="toggle">+</div>
						<div className="project-description">
							<div className="project-description-bullet">
								Tracks time off for 8,000+ employees
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Projects
