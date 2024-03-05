import { ButtonProps } from '../../types';

import './Button.scss';

const Button: React.FC<ButtonProps> = ({
	className,
	text,
	onClick,
	disabled,
}) => {
	return (
		<button
			className={`button ${className}`}
			onClick={onClick}
			disabled={disabled}
		>
			{text}
		</button>
	);
};

export default Button;
