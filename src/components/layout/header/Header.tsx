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
		const focusInput = (e: MouseEvent) => {
			const target = e.target as HTMLElement;

			if (target.id !== 'search-btn' && target.id !== 'search-input') {
				setIsOpen(false);
				uiCtx.closeOnBlur(e, 'search');
			}
		};

		window.addEventListener('click', focusInput);

		return () => {
			window.removeEventListener('click', focusInput);
		};
	}, []);

	return (
		<header className='header'>
			<div className='header__search'>
				<button
					id='search-btn'
					className={`header__search-btn ${
						isOpen && 'header__search-btn--active'
					}`}
					onClick={() => setIsOpen(true)}
				>
					<SearchIcon />
				</button>
				<input
					id='search-input'
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
				<button className='header__controls-notifications'>
					<BellIcon />
				</button>
				<button className='header__controls-user'>
					<UserIcon />
				</button>
			</div>
		</header>
	);
};

export default Header;
