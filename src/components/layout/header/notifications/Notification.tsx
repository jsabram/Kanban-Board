import { Link } from 'react-router-dom';

import './Notification.scss';

interface NotificationProps {
	notifBody: string;
	isNew: boolean;
}

const Notification: React.FC<NotificationProps> = ({ notifBody, isNew }) => {
	return (
		<Link to=''>
			<p className={`notification ${isNew && 'notification--new'}`}>
				{notifBody}
			</p>
		</Link>
	);
};

export default Notification;
