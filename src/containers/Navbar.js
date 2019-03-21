import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import Logo from '../images/logo.png';

function mapStateToProps(state) {
	return {currentUser: state.currentUser};
}

class Navbar extends Component {
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
					<ul className="nav navbar-nav navbar-right">
						<li>
							<Link to="/signup">Sign up</Link>
						</li>
						<li>
							<Link to="/signin">Log in</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default connect(
	mapStateToProps, null
)(Navbar);