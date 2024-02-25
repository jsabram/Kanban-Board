import { useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { UiContext } from './context/ui-context';
import RootPage from './components/pages/RootPage';
import HomePage from './components/pages/HomePage';
import SettingsPage from './components/pages/SettingsPage';
import Nav from './components/layout/nav/Nav';
import Header from './components/layout/header/Header';
import Main from './components/layout/main/Main';

const App = () => {
	const uiCtx = useContext(UiContext);

	// const router = createBrowserRouter(
	// 	[
	// 		{
	// 			path: '/',
	// 			element: <RootPage />,
	// 			children: [
	// 				{
	// 					path: '',
	// 					element: <HomePage />,
	// 				},
	// 				{
	// 					path: '/settings',
	// 					element: <SettingsPage />,
	// 				},
	// 			],
	// 		},
	// 	],
	// 	{ basename: '/Kanban-Board' }
	// );

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
				</Routes>
			</Main>
		</>
	);
};

export default App;
