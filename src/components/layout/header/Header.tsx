import { useState, useEffect } from 'react';
import SearchIcon from '../../icon-components/SearchIcon';
import BellIcon from '../../icon-components/BellIcon';
import UserIcon from '../../icon-components/UserIcon';

import './Header.scss';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openInput = () => {
		setIsOpen(true);
	};

	const closeInput = () => {
		setIsOpen(false);
	};

	useEffect(() => {
		const focusInput = (e: MouseEvent) => {
			const target = e.target as HTMLElement;

			if (target.id !== 'search-btn' && target.id !== 'search-input') {
				setIsOpen(false);
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
					onClick={openInput}
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
					onBlur={closeInput}
				/>
			</div>
			<div className={`header__controls ${isOpen && 'header__controls--hidden'}`}>
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
