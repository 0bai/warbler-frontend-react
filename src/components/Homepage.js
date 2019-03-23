import React from 'react';
import {Link} from "react-router-dom";
import logo from '../images/logo.png';
import Timeline from './Timeline';

const Homepage = ({currentUser}) => {
	if (!currentUser.isAuthenticated) {
		return (
			<div className="home-hero">
				<img src={logo} alt="Warbler Logo"/>
				<h1>What's Happening?</h1>
				<h4>New to Warbler?</h4>
				<Link to="/signup" className="btn tappy-btn">
					Sign up here
				</Link>
			</div>
		);
	}
	return (
		<div>
			<Timeline profileImage={currentUser.user.profileImage} username={currentUser.user.username}/>
		</div> );
};

export default Homepage;