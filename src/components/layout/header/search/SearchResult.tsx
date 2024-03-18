import { Link } from 'react-router-dom';
import Badge from '../../../reusable/Badge';
import { SearchResultProps } from '../../../../types';

import './SearchResult.scss';

const SearchResult: React.FC<SearchResultProps> = ({
	taskTitle,
	taskId,
	taskAssignee,
	taskProject,
}) => {
	return (
		<Link to={`/tasks/${taskId}`} className='search-result'>
			<p className='search-result__title'>{taskTitle}</p>
			<div className='search-result__info'>
				<p className='search-result__info-assignee'>@{taskAssignee}</p>
				<p className='search-result__info-project'>{taskProject}</p>
			</div>
		</Link>
	);
};

export default SearchResult;
