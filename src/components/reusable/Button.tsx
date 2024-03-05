import { ButtonProps } from '../../types';

import './Button.scss';

const Button: React.FC<ButtonProps> = ({ className, text, onClick }) => {
	return (
		<button className={`button ${className}`} onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;
