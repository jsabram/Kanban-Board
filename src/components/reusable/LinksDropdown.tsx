import { LinksDropdownProps } from '../../types';

import './LinksDropdown.scss';

const LinksDropdown: React.FC<LinksDropdownProps> = ({
	children,
	className,
}) => {
	return <div className={`dropdown dropdown--${className}`}>{children}</div>;
};

export default LinksDropdown;
