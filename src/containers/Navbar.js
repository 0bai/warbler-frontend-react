import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {logout} from "../store/actions/auth";
import Logo from '../images/logo.png';

function mapStateToProps(state) {
	return {currentUser: state.currentUser};
}

class Navbar extends Component {
	logout = e => {
		e.preventDefault();
		this.props.logout();
	};
	
	render() {
		return (
			//bg-secondary ?
			<nav className="navbar navbar-dark bg-nickel navbar-expand">
				<div className="container-fluid">
					<div className="navbar-header">
						<Link to="/" className="navbar-brand">
							<img src={Logo} alt="Warbler Home"/>
						</Link>
					</div>
					{this.props.currentUser.isAuthenticated ? (
						<ul className="nav navbar-nav navbar-right">
							<li>
								<Link to={`/users/${this.props.currentUser.user.id}/messages/new`}>New Message</Link>
							</li>
							<li>
								<a onClick={this.logout}>Log out</a>
							</li>
						</ul>
					) : (
						<ul className="nav navbar-nav navbar-right">
							<li>
								<Link to="/signup">Sign up</Link>
							</li>
							<li>
								<Link to="/signin">Log in</Link>
							</li>
						</ul>
					)}
				</div>
			</nav>
		);
	}
}

export default connect(mapStateToProps, {logout})(Navbar);