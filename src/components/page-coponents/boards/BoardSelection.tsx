import PageHeading from '../../reusable/PageHeading';
import BoardCard from './BoardCard';

// dummy data
import { dummyProjects } from '../../../dummyData';
import { dummyTasks } from '../../../dummyData';

import './BoardSelection.scss';

const BoardSelection = () => {
	return (
		<section className='boards'>
			<PageHeading>Your projects</PageHeading>
			<p className='boards__msg'>Select a project to open its kanban board</p>
			<div className='boards__cards'>
				{dummyProjects.map((project, idx) => (
					<BoardCard
						key={idx}
						projectTitle={project}
						activeTasks={
							dummyTasks.filter(
								(task) =>
									task.project.toLowerCase() === project.toLowerCase() &&
									task.status !== 'done'
							).length
						}
					/>
				))}
			</div>
		</section>
	);
};

export default BoardSelection;
