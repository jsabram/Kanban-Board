import LinksDropdown from '../../../reusable/LinksDropdown';
import Notification from './Notification';
import { NotificationObject } from '../../../../types';

import './Notifications.scss';

interface NotificationsProps {
	isDropdownActive: boolean;
	notifications: NotificationObject[];
}

const Notifications: React.FC<NotificationsProps> = ({
	isDropdownActive,
	notifications,
}) => {
	return (
		<LinksDropdown
			className={`notifications user ${isDropdownActive && 'user-active'}`}
		>
			{notifications.length > 0 ? (
				notifications.map((notif, idx) => (
					<Notification key={idx} notifBody={notif.body} isNew={notif.isNew} />
				))
			) : (
				<p className='notifications__msg'>No new notifications</p>
			)}
		</LinksDropdown>
	);
};

export default Notifications;
