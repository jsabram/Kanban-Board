import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
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

	const location = useLocation();

	return (
		<nav className='nav'>
			<NavLink to='/' className='nav__logo'>
				<LogoIcon />
			</NavLink>
			<div className='nav__links'>
				<h3 className='nav__links-heading'>Overview</h3>
				<NavLink
					to='/'
					className={({ isActive }) =>
						isActive ? 'nav__link nav__link--active' : 'nav__link'
					}
					end={true}
				>
					<HomeIcon />
					<p className='nav__link-title'>Home</p>
				</NavLink>
				<div
					id='create'
					className={
						location.pathname === '/create-task' ||
						location.pathname === '/create-board'
							? 'nav__link nav__link--create nav__link--active'
							: 'nav__link nav__link--create'
					}
					tabIndex={0}
					onClick={() => {
						uiCtx.openDropdown('create');
						console.log(location);
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
						<NavLink
							to='/create-task'
							className='nav__link--create-dropdown-link'
						>
							Create a task
						</NavLink>
						<NavLink
							to='/create-board'
							className='nav__link--create-dropdown-link'
						>
							Create a board
						</NavLink>
					</LinksDropdown>
				</div>
				<NavLink
					to='/tasks'
					className={({ isActive }) =>
						isActive ? 'nav__link nav__link--active' : 'nav__link'
					}
				>
					<TaskListIcon />
					<p className='nav__link-title'>Tasks</p>
				</NavLink>
				<NavLink
					to='/boards'
					className={({ isActive }) =>
						isActive ? 'nav__link nav__link--active' : 'nav__link'
					}
				>
					<BoardIcon />
					<p className='nav__link-title'>Kanban boards</p>
				</NavLink>
				<NavLink
					to='/settings'
					className={({ isActive }) =>
						isActive ? 'nav__link nav__link--active' : 'nav__link'
					}
				>
					<SettingsIcon />
					<p className='nav__link-title'>Settings</p>
				</NavLink>
			</div>
		</nav>
	);
};

export default Nav;
