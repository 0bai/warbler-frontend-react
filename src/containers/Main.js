import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';

function mapStateToProps(state) {
	return {currentUser: state.currentUser};
}

const Main = props => {
	return (
		<div className="container">
			<Switch>
				<Route exact path="/" render={props => <Homepage {...props} />}/>
				<Route exact path="/signin" render={props => {
					return ( <AuthForm buttonText='Log in' heading='Welcome Back.' {...props}/> );
				}
				}/>
				<Route exact path="/signup" render={props => {
					return ( <AuthForm signUp buttonText='Sign up' heading='Join Warbler.' {...props}/> );
				}
				}/>
			</Switch>
		</div>
	);
};

export default withRouter(connect(mapStateToProps)(Main));