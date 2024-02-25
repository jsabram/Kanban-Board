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
			<NavLink to='/' className='nav__logo'>
				<LogoIcon />
			</NavLink>
			<div className='nav__links'>
				<h3 className='nav__links-heading'>Overview</h3>
				<NavLink to='/' className='nav__link'>
					<HomeIcon />
					<p className='nav__link-title'>Home</p>
				</NavLink>
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
				<NavLink to='/assigned-tasks' className='nav__link'>
					<TaskListIcon />
					<p className='nav__link-title'>Assigned tasks</p>
				</NavLink>
				<NavLink to='/boards' className='nav__link  '>
					<BoardIcon />
					<p className='nav__link-title'>Kanban boards</p>
				</NavLink>
				<NavLink to='/settings' className='nav__link nav__link--active'>
					<SettingsIcon />
					<p className='nav__link-title'>Settings</p>
				</NavLink>
			</div>
		</nav>
	);
};

export default Nav;
