import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchMessages} from "../store/actions/messages";
import MessageItem from '../components/MessageItem';

function mapStateToProps(state) {
	return {
		messages: state.messages
	};
}

class MessagesList extends Component {
	componentDidMount() {
		this.props.fetchMessages();
	}
	
	render() {
		const {messages} = this.props;
		let messagesList = messages.map(m => (
				<MessageItem key={m._id}
							 date={m.createdAt}
							 text={m.text}
							 username={m.user.username}
							 profileImage={m.user.profileImage}/>
			)
		);
		return (
			<div>
				{messagesList}
			</div>
		);
	}
}

export default connect(mapStateToProps, {fetchMessages})(MessagesList);