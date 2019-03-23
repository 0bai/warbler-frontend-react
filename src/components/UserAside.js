import React from 'react';
import DefaultProfileImage from '../images/egg.png';

const UserAside = ({profileImage, username}) => {
	return (
		<aside className='col-sm-2'>
			<div className="panel panel-default">
				<div className="panel-body">
					<img className='img-thumbnail'
						 src={profileImage || DefaultProfileImage} alt={username}/>
				</div>
			</div>
		</aside>
	);
};

export default UserAside;