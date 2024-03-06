import PageHeading from '../../reusable/PageHeading';
import TaskList from './TaskList';
import Select from '../../reusable/Select';

// dummy data
import { dummyProjects } from '../../../dummyData';

import './TaskSelection.scss';

const TaskSelection = () => {
	const options = ['Show All', ...dummyProjects];
	return (
		<>
			<div className='tasks tasks--assigned'>
				<PageHeading>Assigned tasks</PageHeading>
				<TaskList />
			</div>
			<div className='tasks tasks-all'>
				<PageHeading>All tasks</PageHeading>
				<label htmlFor='project' className='tasks__label'>
					Project
				</label>
				<Select id='project' options={options}></Select>
			</div>
		</>
	);
};

export default TaskSelection;
