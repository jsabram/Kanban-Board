import TaskCard from './TaskCard';

import './TaskList.scss';

const TaskList = () => {
	return (
		<div className='task-list'>
			<h3 className='task-list__priority'>Low</h3>
			<div className='task-list__container'>
				<TaskCard
					priority='low'
					id='item-1234'
					title='Delete the folder'
					status='To do'
					assignee='username'
				/>
				<TaskCard
					priority='medium'
					id='item-1234'
					title='Rename the file'
					status='To do'
					assignee='username'
				/>
				<TaskCard
					priority='high'
					id='item-1234'
					title='Refactor the JavaScript file in the ABD repo'
					status='To do'
					assignee='username'
				/>
			</div>
		</div>
	);
};

export default TaskList;
