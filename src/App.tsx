import { useEffect, useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UiContext } from './context/ui-context';
import RootPage from './components/pages/RootPage';
import HomePage from './components/pages/HomePage';
import SettingsPage from './components/pages/SettingsPage';

const App = () => {
	const uiCtx = useContext(UiContext);

	const router = createBrowserRouter([
		{
			path: '/Kanban-Board',
			element: <RootPage />,
			children: [
				{
					path: '',
					element: <HomePage />,
				},
				{
					path: 'settings',
					element: <SettingsPage />,
				},
			],
		},
	]);

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

	return <RouterProvider router={router} />;
};

export default App;
