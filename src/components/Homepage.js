import React from 'react';
import {Link} from "react-router-dom";
import logo from '../images/logo.png';

const Homepage = () => (
	<div className="home-hero">
		<img src={logo} alt="Warbler Logo"/>
		<h1>What's Happening?</h1>
		<h4>New to Warbler?</h4>
		<Link to="/signup" className="btn tappy-btn">
			Sign up here
		</Link>
	</div>
);

export default Homepage;