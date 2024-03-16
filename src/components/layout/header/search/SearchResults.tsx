import LinksDropdown from '../../../reusable/LinksDropdown';
import SearchResult from './SearchResult';
import { SearchResultsProps } from '../../../../types';

import './SearchResults.scss';

const SearchResults: React.FC<SearchResultsProps> = ({
	isDropdownActive,
	tasks,
}) => {
	
	return (
		<LinksDropdown
			className={`results ${isDropdownActive && 'results-active'}`}
		>
			{tasks.length > 0 ? (
				tasks.map((task, idx) => (
					<SearchResult
						key={idx}
						taskTitle={task.title}
						taskId={task.id}
						taskAssignee={task.assignee}
					/>
				))
			) : (
				<p className='results__msg'>No tasks match the provided criteria</p>
			)}
		</LinksDropdown>
	);
};

export default SearchResults;
