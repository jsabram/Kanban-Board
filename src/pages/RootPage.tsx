import { Outlet } from 'react-router-dom';
import Nav from '../components/layout/nav/Nav';
import Header from '../components/layout/header/Header';
import Main from '../components/layout/main/Main';

const RootPage = () => {
	return (
		<>
			<Nav />
			<Header />
			<Main>
				<Outlet />
			</Main>
		</>
	);
};

export default RootPage;
