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
	
	handleSubmit = (e) => {
		e.preventDefault();
		const authType = this.props.signUp ? 'signup' : 'signin';
		this.props.onAuth(authType, this.state)
			.then(this.props.history.push('/'))
			.catch(() => {
				this.props.history.push(`/${authType}`);
			});
	};
	
	render() {
		const {email, username, password, profileImage} = this.state;
		const {heading, buttonText, signUp, errors, history, removeError} = this.props;
		if (errors.message) {
			const unlisten = history.listen(() => {
				removeError();
				unlisten();
			});
		}
		return (
			<div>
				<div className="row justify-content-md-center text-center mt-5">
					<div className="col-md-6">
						<form onSubmit={this.handleSubmit}>
							<h2>{heading}</h2>
							{errors.message && ( <div className="alert alert-danger"> {errors.message}</div> )}
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
								<button type="submit" className="btn btn-block btn-lg tappy-btn">{buttonText}</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}


export default AuthForm;