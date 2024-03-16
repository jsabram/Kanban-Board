import TaskCard from '../tasks/TaskCard';
import { BoardColumnProps } from '../../../../types';

import './BoardColumn.scss';

const BoardColumn: React.FC<BoardColumnProps> = ({ statusName, tasks }) => {
	const statusTasks = tasks
		? tasks.filter(
				(task) => task.status.toLowerCase() === statusName.toLowerCase()
		  )
		: [];

	return (
		<div className='board__col'>
			<p className='board__col-title'>
				{statusName}{' '}
				<span className='board__col-title--amount'>{statusTasks?.length}</span>
			</p>
			<div className='board__col-tasks'>
				{statusTasks?.map((task, idx) => (
					<TaskCard
						key={idx}
						priority={task.priority}
						taskId={task.id}
						title={task.title}
						status={task.status}
						assignee={task.assignee}
						project={task.project}
					/>
				))}
			</div>
		</div>
	);
};

export default BoardColumn;
