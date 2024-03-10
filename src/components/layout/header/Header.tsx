import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UiContext } from '../../../context/ui-context';
import SearchResults from './search/SearchResults';
import LinksDropdown from '../../reusable/LinksDropdown';
import SearchIcon from '../../icon-components/SearchIcon';
import BellIcon from '../../icon-components/BellIcon';
import UserIcon from '../../icon-components/UserIcon';

// dummy data
import { dummyTasks } from '../../../dummyData';

import './Header.scss';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [resultTasks, setResultTasks] = useState(dummyTasks);

	const uiCtx = useContext(UiContext);

	const searchHandler = (e: React.ChangeEvent) => {
		const target = e.target as HTMLInputElement;
		const searchedValue = target.value.toLowerCase();

		uiCtx.openDropdown('search');

		const filteredArr = dummyTasks.filter(
			(task) =>
				task.title.toLowerCase().includes(searchedValue) ||
				task.id.toLowerCase().includes(searchedValue) ||
				task.id.toLowerCase().includes(searchedValue)
		);

		setInputValue(searchedValue);
		setResultTasks(filteredArr);
	};

	return (
		<header className='header'>
			<div className='header__search'>
				<button
					className={`header__search-btn ${
						isOpen && 'header__search-btn--active'
					}`}
					onClick={() => {
						setIsOpen((prev) => !prev);
						setInputValue('');
					}}
				>
					<SearchIcon />
				</button>
				<input
					id='search'
					type='text'
					autoComplete='off'
					className={`header__search-input ${
						isOpen && 'header__search-input--active'
					}`}
					placeholder='Search'
					onChange={searchHandler}
					value={inputValue}
				/>
				{/* Search results component */}
				<SearchResults
					isDropdownActive={uiCtx.searchDropdown}
					tasks={resultTasks}
				/>
			</div>
			<div
				className={`header__controls ${isOpen && 'header__controls--hidden'}`}
			>
				<button
					id='notifications'
					className='header__controls-notifications'
					onClick={() => uiCtx.openDropdown('notifications')}
				>
					{/* header__controls-notifications-alert--active > to be added when there are undread notifications */}
					<span className='header__controls-notifications-alert'></span>
					<BellIcon />
					<LinksDropdown
						className={`notifications ${
							uiCtx.notificationsDropdown && 'notifications-active'
						}`}
					>
						<Link to='/'>Test 1</Link>
						<Link to='/'>Test 2</Link>
					</LinksDropdown>
				</button>
				<button
					id='user'
					className='header__controls-user'
					onClick={() => uiCtx.openDropdown('user')}
				>
					<UserIcon />
					<LinksDropdown
						className={`user ${uiCtx.userDropdown && 'user-active'}`}
					>
						<Link to='/assigned-tasks'>My tasks</Link>
						<Link to='/settings'>Settings</Link>
					</LinksDropdown>
				</button>
			</div>
		</header>
	);
};

export default Header;
