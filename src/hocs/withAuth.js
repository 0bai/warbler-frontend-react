import React, {Component} from 'react';
import {connect} from 'react-redux';


export default function withAuth(ComponentToRender) {
	class Authenticate extends Component {
		componentWillMount() {
			if (!this.props.isAuthenticated) this.history.push('/signin');
		}
		
		componentWillUpdate(nextProps, nextState) {
			if (!nextProps.isAuthenticated) this.history.push('/signin');
		}
		
		render() {
			return ( <ComponentToRender {...this.props} /> );
		}
	}
	
	function mapStateToProps(state) {
		return {
			isAuthenticated: state.currentUser.isAuthenticated
		};
	}
	
	return connect(mapStateToProps)(Authenticate);
}

