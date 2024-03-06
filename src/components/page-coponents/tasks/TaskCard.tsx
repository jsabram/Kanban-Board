import { Link } from 'react-router-dom';

import './TaskCard.scss';

interface TaskCardProps {
	// className: string;
	priority: string;
	id: string;
	title: string;
	status: string;
	assignee: string;
}

const TaskCard: React.FC<TaskCardProps> = ({
	// className,
	priority,
	id,
	title,
	status,
	assignee,
}) => {
	return (
		<Link to='' className={`task__card task__card--${priority}`}>
			<h5 className='task__card-id'>{id}</h5>
			<h4 className='task__card-title'>{title}</h4>
			<p className='task__card-info'>
				<span>Status:</span> {status}
			</p>
			<p className='task__card-info'>
				<span>Assignee:</span> @{assignee}
			</p>
		</Link>
	);
};

export default TaskCard;
