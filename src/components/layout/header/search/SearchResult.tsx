import { Link } from 'react-router-dom';
import { SearchResultProps } from '../../../../types';

import './SearchResult.scss';

const SearchResult: React.FC<SearchResultProps> = ({
	taskTitle,
	taskId,
	taskAssignee,
}) => {
	return (
		<Link to='' className='search-result'>
			<h5>{taskTitle}</h5>
			<div>
				<small className='search-result__id'>{taskId}</small>
				<small className='search-result__assignee'>@{taskAssignee}</small>
			</div>
		</Link>
	);
};

export default SearchResult;
