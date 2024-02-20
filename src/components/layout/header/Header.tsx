import { useState, useEffect, useContext } from 'react';
import { UiContext } from '../../../context/ui-context';
import LinksDropdown from '../../reusable/LinksDropdown';
import SearchIcon from '../../icon-components/SearchIcon';
import BellIcon from '../../icon-components/BellIcon';
import UserIcon from '../../icon-components/UserIcon';

import './Header.scss';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [inputValue, setInputValue] = useState('');

	const uiCtx = useContext(UiContext);

	const searchHandler = (e: React.ChangeEvent) => {
		const target = e.target as HTMLInputElement;
		const searchedValue = target.value;

		uiCtx.openDropdown('search');
		setInputValue(searchedValue);
	};

	const closeInput = () => {
		setIsOpen(false);
		setInputValue('');
	};

	useEffect(() => {
		const hideDropdowns = (e: MouseEvent) => {
			uiCtx.closeOnBlur(e, 'search');
		};

		window.addEventListener('click', hideDropdowns);

		return () => {
			window.removeEventListener('click', hideDropdowns);
		};
	}, []);

	return (
		<header className='header'>
			<div className='header__search'>
				<button
					className={`header__search-btn ${
						isOpen && 'header__search-btn--active'
					}`}
					onClick={() => setIsOpen(true)}
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
					onBlur={closeInput}
					value={inputValue}
				/>
				<LinksDropdown
					className={`results ${uiCtx.searchDropdown && 'results-active'}`}
				>
					<a href='#'>Test 1</a>
					<a href='#'>Test 2</a>
					<a href='#'>Test 3</a>
				</LinksDropdown>
			</div>
			<div
				className={`header__controls ${isOpen && 'header__controls--hidden'}`}
			>
				<button
					id='notifications'
					className='header__controls-notifications'
					onClick={() => uiCtx.openDropdown('notifications')}
				>
					<BellIcon />
					<LinksDropdown
						className={`notifications ${
							uiCtx.notificationsDropdown && 'notifications-active'
						}`}
					>
						<a href='#'>Test 1</a>
						<a href='#'>Test 2</a>
					</LinksDropdown>
				</button>
				<button
					id='user'
					className='header__controls-user'
					onClick={() => uiCtx.openDropdown('user')}
				>
					<UserIcon />
					<LinksDropdown className={`user ${uiCtx.userDropdown && 'user-active'}`}>
						<a href='#'>My tasks</a>
						<a href='#'>Settings</a>
					</LinksDropdown>
				</button>
			</div>
		</header>
	);
};

export default Header;