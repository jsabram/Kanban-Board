import { forwardRef } from 'react';

import './Select.scss';

interface SelectProps {
	id: string;
	className: string;
	options: string[];
	onBlur?: (event: React.FocusEvent) => void;
}

const Select: React.ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
	{ id, className, options, onBlur },
	ref
) => {
	return (
		<select id={id} ref={ref} className={`select ${className}`} onBlur={onBlur}>
			<option value={0} hidden>
				-
			</option>
			{options.map((option, idx) => (
				<option key={idx} value={option}>
					{option}
				</option>
			))}
		</select>
	);
};

export default forwardRef(Select);
