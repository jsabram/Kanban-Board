import { Link } from 'react-router-dom';
import { useUtils } from '../../../../hooks/useUtils';
import { TaskCardProps } from '../../../../types';
import Badge from '../../../reusable/Badge';

import './TaskCard.scss';

const TaskCard: React.FC<TaskCardProps> = ({
	className,
	priority,
	taskId,
	title,
	status,
	assignee,
	project,
}) => {
	const { capitalize } = useUtils();
	const statusClass = status.replaceAll(' ', '-').toLowerCase();

	return (
		<Link
			to={`/tasks/${taskId}`}
			className={`task__card task__card--${priority} ${className}`}
		>
			<h4 className='task__card-title'>{title}</h4>
			<div className='task__card-badges'>
				<Badge className={priority} badgeText={capitalize(priority)} />
				<Badge className={statusClass} badgeText={status} />
			</div>
			<p className='task__card-info'>
				<span>Assignee:</span> @{assignee}
			</p>
			<p className='task__card-info'>
				<span>Project:</span> {project}
			</p>
		</Link>
	);
};

export default TaskCard;
