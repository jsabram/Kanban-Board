import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../../store/typedHooks';
import { useUtils } from '../../../../hooks/useUtils';
import Select from '../../../reusable/Select';
import Badge from '../../../reusable/Badge';

import { taskStatuses } from '../../../../data';

import './Task.scss';

const Task = () => {
	const { taskId } = useParams();

	const tasks = useAppSelector((state) =>
		state.projectsData.projects.flatMap((projects) => projects.tasks)
	);

	const currentTask = tasks.find((task) => task.id === taskId);

	const { capitalize, createClassName } = useUtils();

	const changeTaskStatus = (e: React.ChangeEvent) => {
		const target = e.target as HTMLSelectElement;

		console.log(target.value);
	};

	return (
		<div className='task'>
			<div className='task__info'>
				<small className='gray-text'>
					{taskId} / {currentTask?.project}
				</small>
				<div className='task__info-details'>
					<Badge
						className={currentTask?.priority || ''}
						badgeText={capitalize(currentTask?.priority || '')}
					/>
					<Badge
						className={createClassName(currentTask?.status || '')}
						badgeText={currentTask?.status || ''}
					/>
					<p>@{currentTask?.assignee}</p>
				</div>
				<h2>{currentTask?.title}</h2>
				<div className='task__info-controls'>
					<Select
						id='change-status'
						options={taskStatuses}
						defaultOption='Change status'
						value='Change status'
						onChange={changeTaskStatus}
					/>
					<button className='task__info-controls-edit'>Edit task</button>
				</div>
			</div>
			<div className='task__details'>
				<h3>Description</h3>
				<p className='task__details-description'>{currentTask?.description}</p>
			</div>
			<div className='task__comments'>
				<h3>Comments</h3>
			</div>
		</div>
	);
};

export default Task;
