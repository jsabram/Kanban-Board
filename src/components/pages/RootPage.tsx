import { Outlet } from 'react-router-dom';
import Nav from '../layout/nav/Nav';
import Header from '../layout/header/Header';
import Main from '../layout/main/Main';

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
