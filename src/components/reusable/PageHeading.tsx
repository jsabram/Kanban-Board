import { ChildrenProps } from '../../types';

import './PageHeading.scss';

const PageHeading: React.FC<ChildrenProps> = ({ children }) => {
	return <h2 className='page-heading'>{children}</h2>;
};

export default PageHeading;
