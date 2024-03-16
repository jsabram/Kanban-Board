import { useAppSelector } from '../../../../store/typedHooks';
import { useParams } from 'react-router-dom';
import PageHeading from '../../../reusable/PageHeading';
import BoardColumn from './BoardColumn';

// data to be replaced with data from backend
import { taskStatuses } from '../../../../data';

import './Board.scss';

const Board = () => {
	const projects = useAppSelector((state) => state.projectsData.projects);

	const { boardId } = useParams();

	const currentProject = projects.find(
		(project) => project.projectId === boardId
	);

	return (
		<section>
			<PageHeading>{currentProject!.projectName} board</PageHeading>
			<div className='board'>
				{taskStatuses.map((status, idx) => (
					<BoardColumn
						key={idx}
						statusName={status}
						tasks={currentProject!.tasks}
					/>
				))}
			</div>
		</section>
	);
};

export default Board;
