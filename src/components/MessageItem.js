import React from 'react';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import defaultProfilePic from '../images/egg.png';

const MessageItem = ({date, profileImage, text, username}) => {
	return (
		<div>
			<img src={profileImage || defaultProfilePic} alt={username} className='profile-image'/>
			<div className='messageArea'>
				<Link to='/'>@{username} &nbsp;</Link>
				<span className='text-muted'>
					<Moment className='text-muted' format='DD MM YYYY'>
						{date}
					</Moment>
				</span>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default MessageItem;