import { useEffect, useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UiContext } from './context/ui-context';
import RootPage from './components/pages/RootPage';
import HomePage from './components/pages/HomePage';
import CreateTaskPage from './components/pages/CreateTaskPage';
import CreateBoardPage from './components/pages/CreateBoardPage';
import TaskSelectionPage from './components/pages/TaskSelectionPage';
import BoardsSelectionPage from './components/pages/BoardsSelectionPage';
import BoardPage from './components/pages/BoardPage';
import SettingsPage from './components/pages/SettingsPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootPage />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{ path: 'create-task', element: <CreateTaskPage /> },
			{ path: 'create-board', element: <CreateBoardPage /> },
			{ path: 'tasks', element: <TaskSelectionPage /> },
			{ path: 'boards', element: <BoardsSelectionPage /> },
			{path: 'boards/Frontend', element: <BoardPage />}, // to be changed to a dynamic path with board id
			{ path: 'settings', element: <SettingsPage /> },
		],
	},
]);

const App = () => {
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

	return (
		<RouterProvider router={router} />
		// <>
		// 	<Nav />
		// 	<Header />
		// 	<Main>
		// 		{/* <Routes>
		// 			<Route path='/' element={<HomePage />} />
		// 			<Route path='/create-task' element={<CreateTaskPage />} />
		// 			<Route path='/create-board' element={<CreateBoardPage />} />
		// 			<Route path='/tasks' element={<TaskSelectionPage />} />
		// 			<Route path='/boards' element={<BoardsSelectionPage />} />

		// 			<Route path='/Frontend' element={<BoardPage />} />
		// 			<Route path='/settings' element={<SettingsPage />} />
		// 		</Routes> */}
		// 	</Main>
		// </>
	);
};

export default App;
