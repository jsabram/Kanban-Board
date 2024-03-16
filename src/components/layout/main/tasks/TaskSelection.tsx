import { useState } from 'react';
import { useUtils } from '../../../../hooks/useUtils';
import { TaskObject } from '../../../../types';
import PageHeading from '../../../reusable/PageHeading';
import TaskList from './TaskList';

// dummy data
import { dummyPriorities } from '../../../../dummyData';
import { dummyProjects } from '../../../../dummyData';
import { dummyTasks } from '../../../../dummyData';

import './TaskSelection.scss';

const priorities = ['Show all', ...dummyPriorities];
const projects = ['Show all', ...dummyProjects];

const TaskSelection = () => {
	// tasks assigned to the user & with status different than 'done'
	// all tasks with status different than 'done'
	const userTasks = dummyTasks.filter(
		(task) => task.assignee === 'user' && task.status !== 'done'
	);
	const sharedTasks = dummyTasks.filter((task) => task.status !== 'done');

	// state for rendering filtered lists dynamically
	const [assignedTasks, setAssignedTasks] = useState<TaskObject[]>(userTasks);
	const [allTasks, setAllTasks] = useState<TaskObject[]>(sharedTasks);

	const [assignedRules, setAssignedRules] = useState({
		priority: 'show all',
		project: 'show all',
	});

	const [allRules, setAllRules] = useState({
		priority: 'show all',
		project: 'show all',
	});

	const { applyTaskFilter, sortByPriority } = useUtils();

	const filterTasks = (e: React.ChangeEvent) => {
		const target = e.target as HTMLSelectElement;

		const value = target.value.toLowerCase();
		const filter = target.id.includes('priority') ? 'priority' : 'project';

		const isListTypeAssigned = target.id.includes('assigned');

		const tasks = isListTypeAssigned ? userTasks : sharedTasks;
		const newRules = isListTypeAssigned
			? { ...assignedRules, [filter]: value }
			: { ...allRules, [filter]: value };

		const filteredArr = applyTaskFilter(tasks, newRules);

		isListTypeAssigned
			? setAssignedTasks(filteredArr)
			: setAllTasks(filteredArr);
		isListTypeAssigned ? setAssignedRules(newRules) : setAllRules(newRules);
	};

	return (
		<section className='tasks'>
			<div className='tasks__assigned'>
				<PageHeading>Assigned tasks</PageHeading>
				<TaskList
					tasks={sortByPriority(assignedTasks)}
					priorityId='priority-assigned'
					priorityOptions={priorities}
					priorityOnChange={filterTasks}
					projectId='project-assigned'
					projectOptions={projects}
					projectOnChange={filterTasks}
					defaultOption='Show all'
				/>
			</div>
			<div className='tasks__all'>
				<PageHeading>All tasks</PageHeading>
				<TaskList
					tasks={sortByPriority(allTasks)}
					priorityId='priority-all'
					priorityOptions={priorities}
					priorityOnChange={filterTasks}
					projectId='project-all'
					projectOptions={projects}
					projectOnChange={filterTasks}
					defaultOption='Show all'
				/>
			</div>
		</section>
	);
};

export default TaskSelection;
