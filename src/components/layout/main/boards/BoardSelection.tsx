import { useState } from 'react';
import { useAppSelector } from '../../../../store/typedHooks';
import PageHeading from '../../../reusable/PageHeading';
import BoardCard from './BoardCard';
import Select from '../../../reusable/Select';

import './BoardSelection.scss';

const BoardSelection = () => {
	const projects = useAppSelector((state) => state.projectsData.projects);

	const [displayedProjects, setDisplayedProjects] = useState(projects);

	const selectBoard = (e: React.ChangeEvent) => {
		const target = e.target as HTMLSelectElement;

		target.value === 'Show all'
			? setDisplayedProjects(projects)
			: setDisplayedProjects(
					projects.filter(
						(project) =>
							project.projectName.toLowerCase() === target.value.toLowerCase()
					)
			  );
	};
	return (
		<section className='boards'>
			<PageHeading>Your boards</PageHeading>
			<p className='boards__msg'>
				Select a tile to open a project.
			</p>
			<label htmlFor='project' className='boards__label'>
				Project:
			</label>
			<Select
				id='project'
				options={['Show all', ...projects.map(project => project.projectName)]}
				defaultOption='Show all'
				onChange={selectBoard}
			/>
			<div className='boards__cards'>
				{displayedProjects.map((project, idx) => (
					<BoardCard
						key={idx}
						path={project.projectId}
						projectTitle={project.projectName}
						activeTasks={
							project.tasks.filter(
								(task) => task.status.toLowerCase() !== 'done'
							).length
						}
					/>
				))}
			</div>
		</section>
	);
};

export default BoardSelection;
