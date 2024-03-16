import { Link } from 'react-router-dom';
import { useUtils } from '../../../../hooks/useUtils';
import { TaskCardProps } from '../../../../types';

import './TaskCard.scss';

const TaskCard: React.FC<TaskCardProps> = ({
	priority,
	taskId,
	title,
	status,
	assignee,
	project,
}) => {
	const { capitalize } = useUtils();

	return (
		<Link to={taskId} className={`task__card task__card--${priority}`}>
			<div className='task__card-header'>
				<h5 className='task__card-header--id'>{taskId}</h5>
				<small>@{assignee}</small>
			</div>
			<h4 className='task__card-title'>{title}</h4>
			<p className='task__card-info'>
				<span>Priority:</span> {capitalize(priority)}
			</p>
			<p className='task__card-info'>
				<span>Status:</span> {capitalize(status)}
			</p>
			<p className='task__card-info'>
				<span>Project:</span> {capitalize(project)}
			</p>
		</Link>
	);
};

export default TaskCard;
