import { ChildrenProps } from '../../types';

import './PageHeading.scss';

const PageHeading: React.FC<ChildrenProps> = ({ children }) => {
	const isHomepage = children?.toString().includes('Hello');
	return <h2 className={`page-heading ${isHomepage && 'page-heading--homepage'}`}>{children}</h2>;
};

export default PageHeading;
