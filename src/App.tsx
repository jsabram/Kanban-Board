import { useEffect, useContext } from 'react';
import { UiContext } from './context/ui-context';
import Nav from './components/layout/nav/Nav';
import Header from './components/layout/header/Header';

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
		</>
	);
};

export default App;
