import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Homepage from '../components/Homepage';
import AuthForm from '../components/AuthForm';
import {authUser} from "../store/actions/auth";
import {removeError} from "../store/actions/errors";
import withAuth from "../hocs/withAuth";
import MessageForm from '../containers/MessageForm';

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser,
		errors: state.errors
	};
}

const Main = props => {
	const {authUser, errors, removeError, currentUser} = props;
	return (
		<div className="container">
			<Switch>
				<Route exact path="/" render={props => <Homepage currentUser={currentUser} {...props} />}/>
				<Route exact path="/signin" render={props => {
					return ( <AuthForm
						removeError={removeError}
						errors={errors}
						onAuth={authUser}
						buttonText='Log in'
						heading='Welcome Back.' {...props}/> );
				}
				}/>
				<Route exact path="/signup" render={props => {
					return (
						<AuthForm
							removeError={removeError}
							errors={errors}
							onAuth={authUser}
							signUp buttonText='Sign up'
							heading='Join Warbler.' {...props}/> );
				}
				}/>
				<Route path='/user/:id/messages/new' component={withAuth(MessageForm)}/>
			</Switch>
		</div>
	);
};

export default withRouter(connect(mapStateToProps, {authUser, removeError})(Main));