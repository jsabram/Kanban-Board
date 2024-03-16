import { useState } from 'react';
import PageHeading from '../../reusable/PageHeading';
import BoardCard from './BoardCard';
import Select from '../../reusable/Select';

// dummy data
import { dummyProjects } from '../../../dummyData';
import { dummyTasks } from '../../../dummyData';

import './BoardSelection.scss';

const BoardSelection = () => {
	const [boards, setBoards] = useState(dummyProjects);

	const selectBoard = (e: React.ChangeEvent) => {
		const target = e.target as HTMLSelectElement;

		target.value === 'Show all'
			? setBoards(dummyProjects)
			: setBoards(
					dummyProjects.filter(
						(project) => project.toLowerCase() === target.value.toLowerCase()
					)
			  );
	};
	return (
		<section className='boards'>
			<PageHeading>Your boards</PageHeading>
			<p className='boards__msg'>
				Select a kanban board to open its detailed view
			</p>
			<label htmlFor='project' className='boards__label'>Project:</label>
			<Select
				id='project'
				options={['Show all', ...dummyProjects]}
				defaultOption='Show all'
				onChange={selectBoard}
			/>
			<div className='boards__cards'>
				{boards.map((project, idx) => (
					<BoardCard
						key={idx}
						path={project}
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
