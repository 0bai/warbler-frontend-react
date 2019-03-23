import React from 'react';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import defaultProfilePic from '../images/egg.png';

const MessageItem = ({date, profileImage, text, username}) => {
	return (
		<div>
			<li className="list-group-item">
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
			</li>
		</div>
	);
};

export default MessageItem;