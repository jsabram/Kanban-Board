import { useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { UiContext } from './context/ui-context';
import Nav from './components/layout/nav/Nav';
import Header from './components/layout/header/Header';
import Main from './components/layout/main/Main';
import HomePage from './components/pages/HomePage';
import CreateTaskPage from './components/pages/CreateTaskPage';
import CreateBoardPage from './components/pages/CreateBoardPage';
import TaskSelectionPage from './components/pages/TaskSelectionPage';
import BoardsSelectionPage from './components/pages/BoardsSelectionPage';
import SettingsPage from './components/pages/SettingsPage';

const App = () => {
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
		<>
			<Nav />
			<Header />
			<Main>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/settings' element={<SettingsPage />} />
					<Route path='/create-task' element={<CreateTaskPage />} />
					<Route path='/create-board' element={<CreateBoardPage />} />
					<Route path='/assigned-tasks' element={<TaskSelectionPage />} />
					<Route path='/boards' element={<BoardsSelectionPage />} />
				</Routes>
			</Main>
		</>
	);
};

export default App;
