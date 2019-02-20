import React, { Component } from "react"

class Welcome extends Component {
	handleArrowClick() {
		document.querySelector("#tech-page").scrollIntoView({
			behavior: "smooth"
		})
	}
	render() {
		return (
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
		)
	}
}

export default Welcome
