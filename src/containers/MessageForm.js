import React, {Component} from 'react';
import {connect} from 'react-redux';
import {postNewMessage} from "../store/actions/messages";
import {addError} from "../store/actions/errors";

function mapStateToProps(state) {
	return {
		error: state.errors
	};
}

class MessageForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: ''
		};
	}
	
	handleNewMessage = e => {
		e.preventDefault();
		this.props.postNewMessage(this.state.message).catch(e => addError(e));
		this.setState({message: ""});
		this.props.history.push('/');
	};
	
	render() {
		return (
			<form onSubmit={this.handleNewMessage}>
				{this.props.errors && ( <div className="alert alert-danger">{this.props.errors}</div> )}
				<input type="text" className='form-control' value={this.state.messages}
					   onChange={e => this.setState({message: e.target.value})}/>
				<button type='submit' className='btn tappy-btn pull-right'>Add Message!</button>
			</form>
		);
	}
}

export default connect(
	mapStateToProps, {postNewMessage})(MessageForm);