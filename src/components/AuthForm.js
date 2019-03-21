import React, {Component} from "react";

class AuthForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			username: "",
			password: "",
			profileImage: ""
		};
		
	}
	
	handleChange = (e) => {
		this.setState({[ e.target.name ]: e.target.value});
	};
	
	render() {
		const {email, username, password, profileImage} = this.state;
		const {heading, buttonText, signUp} = this.props;
		return (
			<div>
				<div className="row justify-content-md-center text-center mt-5">
					<div className="col-md-6">
						<form onSubmit={this.handleSubmit}>
							<h2>{heading}</h2>
							<div className="form-group text-left mt-5">
								<div className="form-group">
									<label htmlFor="email">Email address</label>
									<input className="form-control" type="email" id="email" name="email" value={email}
										   onChange={this.handleChange} placeholder="Enter email"/>
									<small id="emailHelp" className="form-text text-muted text-left">We'll never share
										your email with
										anyone else.
									</small>
								
								</div>
								<div className="form-group">
									<label htmlFor="password">Password</label>
									<input className="form-control" type="password" id="password" name="password"
										   onChange={this.handleChange} placeholder="Enter password"/>
								</div>
								{signUp && (
									<div>
										<div className="form-group">
											<label htmlFor="username">Username</label>
											<div className="input-group">
												<div className="input-group-prepend">
													<span className="input-group-text" id="inputGroupPrepend">@</span>
												</div>
												<input className="form-control" type="username" id="username"
													   name="username"
													   value={username}
													   onChange={this.handleChange} placeholder="Enter username"/>
											</div>
										</div>
										<div className="form-group">
											<label htmlFor="profileImage">Profile Image</label>
											<input className="form-control" type="text" id="profileImage"
												   name="profileImage"
												   onChange={this.handleChange} placeholder="Enter image link"/>
										</div>
									</div>
								)}
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}


export default AuthForm;