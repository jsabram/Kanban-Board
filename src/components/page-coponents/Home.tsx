import PageHeading from '../reusable/PageHeading';

import './Home.scss';

const Home = () => {
	return <section>
		{/* Replace @user with user name */}
		<PageHeading>Hello, @user!</PageHeading>
	</section>;
};

export default Home;
