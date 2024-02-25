import './Main.scss';

import { ChildrenProps } from '../../../types';

const Main: React.FC<ChildrenProps> = ({ children }) => {
	return <main className='main'>{children}</main>;
};

export default Main;
