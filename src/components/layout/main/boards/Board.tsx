import { useParams } from 'react-router-dom';
import PageHeading from '../../../reusable/PageHeading';
import BoardColumn from './BoardColumn';

// dummy data
import { dummyProjects } from '../../../../dummyData';
import { dummyTaskStatuses } from '../../../../dummyData';
import { dummyTasks } from '../../../../dummyData';

import './Board.scss';

const Board = () => {
	const { boardId } = useParams();

	const projectTasks = dummyTasks.filter(
		(task) => task.project.toLowerCase() === boardId
	);

	const projectTitle = dummyProjects.find(
		(project) => project.toLowerCase() === boardId
	);

	return (
		<section>
			<PageHeading>{projectTitle} board</PageHeading>
			<div className='board'>
				{dummyTaskStatuses.map((status, idx) => (
					<BoardColumn key={idx} statusName={status} tasks={projectTasks} />
				))}
			</div>
		</section>
	);
};

export default Board;
