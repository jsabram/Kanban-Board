import { TaskListProps } from '../../../types';
import Select from '../../reusable/Select';
import TaskCard from './TaskCard';

import './TaskList.scss';

const TaskList: React.FC<TaskListProps> = ({
	tasks,
	priorityId,
	priorityOptions,
	priorityOnChange,
	projectId,
	projectOptions,
	projectOnChange,
	defaultOption,
}) => {
	return (
		<div className='task-list'>
			<div className='task-list__filters'>
				<div className='task-list__filter'>
					<label htmlFor={priorityId} className='task-list__label'>
						Priority:
					</label>
					<Select
						id={priorityId}
						options={priorityOptions}
						defaultOption={defaultOption}
						onChange={priorityOnChange}
					/>
				</div>
				<div className='task-list__filter'>
					<label htmlFor={projectId} className='task-list__label'>
						Project:
					</label>
					<Select
						id={projectId}
						options={projectOptions}
						defaultOption={defaultOption}
						onChange={projectOnChange}
					/>
				</div>
			</div>
			<div>
				{tasks.length > 0 ? (
					tasks.map((task, idx) => (
						<TaskCard
							key={idx}
							priority={task.priority}
							id={task.id}
							title={task.title}
							status={task.status}
							assignee={task.assignee}
							project={task.project}
						/>
					))
				) : (
					<p className='task-list__msg'>No tasks match the selected criteria</p>
				)}
			</div>
		</div>
	);
};

export default TaskList;
