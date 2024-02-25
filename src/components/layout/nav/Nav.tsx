import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
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
				<div
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
				</div>
				<a href='#' className='nav__link'>
					<TaskListIcon />
					<p className='nav__link-title'>Assigned tasks</p>
				</a>
				<a href='#' className='nav__link  '>
					<BoardIcon />
					<p className='nav__link-title'>Kanban boards</p>
				</a>
				<NavLink to='/settings' className='nav__link nav__link--active'>
					<SettingsIcon />
					<p className='nav__link-title'>Settings</p>
				</NavLink>
			</div>
		</nav>
	);
};

export default Nav;
