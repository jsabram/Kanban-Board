import { useState } from 'react';
import { useUtils } from '../../../hooks/useUtils';
import { TaskObject } from '../../../types';
import PageHeading from '../../reusable/PageHeading';
import TaskList from './TaskList';
import Select from '../../reusable/Select';

// dummy data
import { dummyPriorities } from '../../../dummyData';
import { dummyProjects } from '../../../dummyData';
import { dummyTasks } from '../../../dummyData';

import './TaskSelection.scss';

const priorities = ['Show all', ...dummyPriorities];
const projects = ['Show all', ...dummyProjects];

const TaskSelection = () => {
	// tasks assigned to the user & with status different than 'done'
	const userTasks = dummyTasks.filter(
		(task) => task.assignee === 'user' && task.status !== 'done'
	);

	// all tasks with status different than 'done'
	const sharedTasks = dummyTasks.filter((task) => task.status !== 'done');

	const [assignedTasks, setAssignedTasks] = useState<TaskObject[]>(userTasks);
	const [allTasks, setAllTasks] = useState<TaskObject[]>(sharedTasks);

	const { sortByPriority } = useUtils();

	const filterByPriority = (e: React.ChangeEvent) => {
		const target = e.target as HTMLSelectElement;

		if (target.value === 'Show all') {
			setAssignedTasks(userTasks);
		} else {
			setAssignedTasks(
				userTasks.filter((task) => task.priority === target.value.toLowerCase())
			);
		}
	};

	const filterByProject = (e: React.ChangeEvent) => {
		const target = e.target as HTMLSelectElement;

		if (target.value === 'Show all') {
			setAllTasks(sharedTasks);
		} else {
			setAllTasks(
				sharedTasks.filter(
					(task) => task.project === target.value.toLowerCase()
				)
			);
		}
	};

	return (
		<>
			<div className='tasks tasks--assigned'>
				<PageHeading>Assigned tasks</PageHeading>
				<label htmlFor='priority' className='tasks__label'>
					Priority
				</label>
				<Select id='project' options={priorities} onChange={filterByPriority} />
				<TaskList tasks={sortByPriority(assignedTasks)} />
			</div>
			<div className='tasks tasks-all'>
				<PageHeading>All tasks</PageHeading>
				<label htmlFor='project' className='tasks__label'>
					Project
				</label>
				<Select id='project' options={projects} onChange={filterByProject} />
				<TaskList tasks={sortByPriority(allTasks)} />
			</div>
		</>
	);
};

export default TaskSelection;
