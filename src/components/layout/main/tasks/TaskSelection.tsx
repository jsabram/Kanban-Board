import { useAppSelector } from '../../../../store/typedHooks';
import { useUtils } from '../../../../hooks/useUtils';
import { TaskObject, TaskStatuses } from '../../../../types';
import PageHeading from '../../../reusable/PageHeading';
import TaskList from './TaskList';

import {
	priorities as prioritiesData,
	taskStatuses,
	usersData,
} from '../../../../data';

import './TaskSelection.scss';

const TaskSelection = () => {
	const projects = useAppSelector((state) => state.projectsData.projects);

	// Extracting tasks that are still active
	const allTasksArr = ([] as TaskObject[])
		.concat(...projects.map((project) => project.tasks))
		.filter(
			(task) => task.status.toLowerCase() !== TaskStatuses.DONE.toLowerCase()
		);
	const userTasksArr = allTasksArr.filter((task) => task.assignee === 'videl'); // Assignee to be changed to the user

	const { sortByPriority, capitalize } = useUtils();

	// Defining available Select element options
	const projectsNames = projects.map((project) => project.projectName);
	const priorityNames = prioritiesData.map((priority) => capitalize(priority));
	const statusNames = taskStatuses
		.filter(
			(status) => status.toLowerCase() !== TaskStatuses.DONE.toLowerCase()
		)
		.map((status) => capitalize(status));
	const assigneeNames = usersData.map((user) => user.username);

	return (
		<section className='tasks'>
			<div className='tasks__assigned'>
				<PageHeading>Assigned tasks</PageHeading>
				<TaskList
					tasks={sortByPriority(userTasksArr)}
					priorityOptions={priorityNames}
					projectOptions={projectsNames}
					statusOptions={statusNames}
					listType='assigned'
				/>
			</div>
			<div className='tasks__all'>
				<PageHeading>All tasks</PageHeading>
				<TaskList
					tasks={sortByPriority(allTasksArr)}
					priorityOptions={priorityNames}
					projectOptions={projectsNames}
					statusOptions={statusNames}
					assigneeOptions={assigneeNames}
					listType='all'
				/>
			</div>
		</section>
	);
};

export default TaskSelection;
