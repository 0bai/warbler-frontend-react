import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Homepage from '../components/Homepage';

function mapStateToProps(state) {
	return {currentUser: state.currentUser};
}

const Main = props => {
	return (
		<div className="container">
			<Switch>
				<Route exact path="/" render={props => <Homepage {...props} />}/>
			</Switch>
		</div>
	);
};

export default withRouter(connect(mapStateToProps)(Main));