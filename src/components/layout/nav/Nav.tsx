import { useContext, useEffect } from 'react';
import { UiContext } from '../../../context/ui-context';
import LinksDropdown from '../../reusable/LinksDropdown';
import HomeIcon from '../../icon-components/HomeIcon';
import BoardIcon from '../../icon-components/BoardIcon';
import AddIcon from '../../icon-components/AddIcon';
import TaskListIcon from '../../icon-components/TaskListIcon';
import SettingsIcon from '../../icon-components/SettingsIcon';
import LogoIcon from '../../icon-components/LogoIcon';

import './Nav.scss';

const Nav = () => {
	const uiCtx = useContext(UiContext);

	useEffect(() => {
		const hideDropdowns = (e: MouseEvent) => {
			const target = e.target as HTMLElement;

			if (target.id !== 'create') {
				uiCtx.closeOnBlur(e, 'create');
			}

			if (target.id !== 'search') {
				uiCtx.closeOnBlur(e, 'search');
			}

			if (target.id !== 'notifications') {
				uiCtx.closeOnBlur(e, 'notifications');
			}

			if (target.id !== 'user') {
				uiCtx.closeOnBlur(e, 'user');
			}
		};

		window.addEventListener('click', hideDropdowns);

		return () => {
			window.removeEventListener('click', hideDropdowns);
		};
	}, []);

	return (
		<nav className='nav'>
			<a href='#' className='nav__logo'>
				<LogoIcon />
			</a>
			<div className='nav__links'>
				<h3 className='nav__links-heading'>Overview</h3>
				<a href='#' className='nav__link'>
					<HomeIcon />
					<p className='nav__link-title'>Home</p>
				</a>
				<p
					id='create'
					className='nav__link nav__link--create'
					tabIndex={0}
					onClick={() => {
						uiCtx.openDropdown('create');
					}}
					onKeyDown={(e) => {
						e.key === 'Enter' && uiCtx.openDropdown('create');
					}}
				>
					<AddIcon />
					<p className='nav__link-title'>Create</p>
					<LinksDropdown
						className={`create ${uiCtx.createDropdown && 'create-active'}`}
					>
						<a href='#' className='nav__link--create-dropdown-link'>
							Create a task
						</a>
						<a href='#' className='nav__link--create-dropdown-link'>
							Create a board
						</a>
					</LinksDropdown>
				</p>
				<a href='#' className='nav__link'>
					<TaskListIcon />
					<p className='nav__link-title'>Assigned tasks</p>
				</a>
				<a href='#' className='nav__link  '>
					<BoardIcon />
					<p className='nav__link-title'>Kanban boards</p>
				</a>
				<a href='#' className='nav__link nav__link--active'>
					<SettingsIcon />
					<p className='nav__link-title'>Settings</p>
				</a>
			</div>
		</nav>
	);
};

export default Nav;