import { TaskListProps } from '../../../types';
import TaskCard from './TaskCard';

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
	return (
		<div className='task-list'>
			{tasks.map((task, idx) => (
				<TaskCard
					key={idx}
					priority={task.priority}
					id={task.id}
					title={task.title}
					status={task.status}
					assignee={task.assignee}
					project={task.project}
				/>
			))}
		</div>
	);
};

export default TaskList;
