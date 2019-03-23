import React from 'react';
import MessagesList from '../containers/MessagesList';
import UserAside from '../components/UserAside';

const Timeline = props => (
	<div className='row'>
		<UserAside profileImage={props.profileImage} username={props.username}/>
		<MessagesList/>
	</div> );

export default Timeline;
