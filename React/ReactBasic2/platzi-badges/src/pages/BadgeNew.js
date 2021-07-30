import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
	state = {
		form: {
			firstName: "",
			lastName: "",
			email: "",
			jobTitle: "",
			twitter: "",
		},
	};

	handleChange(e) {
		this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value,
			},
		});
	}

	render() {
		return (
			<React.Fragment>
				<div className="BadgeNew__hero">
					<img className="img-fluid" src={header} alt="logo" />
				</div>

				<div className="container">
					<div className="row">
						<div className="col-6">
							<Badge {...this.state.form} />
						</div>

						<div className="col-6">
							<BadgeForm
								onChange={this.handleChange.bind(this)}
								{...this.state.form}
							/>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default BadgeNew;
