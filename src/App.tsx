import { useEffect, useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setInitialData } from './store/projectsSlice';
import { UiContext } from './context/ui-context';
import RootPage from './pages/RootPage';
import HomePage from './pages/HomePage';
import CreateTaskPage from './pages/CreateTaskPage';
import CreateBoardPage from './pages/CreateBoardPage';
import TaskSelectionPage from './pages/TaskSelectionPage';
import TaskPage from './pages/TaskPage';
import BoardsSelectionPage from './pages/BoardsSelectionPage';
import BoardPage from './pages/BoardPage';
import SettingsPage from './pages/SettingsPage';

// to be replaced with backend data once its implemented
import { projectsData, usersData } from './data';

const router = createBrowserRouter([
	{
		path: '',
		element: <RootPage />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{ path: 'create-task', element: <CreateTaskPage /> },
			{ path: 'create-board', element: <CreateBoardPage /> },
			{ path: 'tasks', element: <TaskSelectionPage /> },
			{ path: 'tasks/:taskId', element: <TaskPage /> },
			{ path: 'boards', element: <BoardsSelectionPage /> },
			{ path: 'boards/:boardId', element: <BoardPage /> },
			{ path: 'settings', element: <SettingsPage /> },
		],
	},
]);

const App = () => {
	const dispatch = useDispatch();

	const uiCtx = useContext(UiContext);

	// Hiding dropdowns if the user clicks elsewhere
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
	}, [uiCtx]);

	// dispatching data in redux state
	// to be replaced with fetching data from backend
	useEffect(() => {
		const initialData = {
			projects: projectsData,
			users: usersData,
		};

		dispatch(setInitialData(initialData));
	}, []);

	return <RouterProvider router={router} />;
};

export default App;
