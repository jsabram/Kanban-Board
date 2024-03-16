import { Link } from 'react-router-dom';

import './BoardCard.scss';

interface BoardCardProps {
	projectTitle: string;
	path: string;
	activeTasks: number;
}

const BoardCard: React.FC<BoardCardProps> = ({
	projectTitle,
	path,
	activeTasks,
}) => {

	return (
		<Link to={`${path.toLowerCase()}`} className='board-card'>
			<h3 className='board-card__title'>{projectTitle}</h3>
			<p className='board-card__tasks'>
				Active tasks:&nbsp;
				{activeTasks}
			</p>
		</Link>
	);
};

export default BoardCard;
