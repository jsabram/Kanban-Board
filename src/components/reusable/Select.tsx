import { forwardRef } from 'react';
import { SelectProps } from '../../types';

import './Select.scss';

const Select: React.ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
	{ id, className, options, defaultOption, onBlur, onChange },
	ref
) => {
	return (
		<select
			id={id}
			ref={ref}
			className={`select ${className}`}
			onBlur={onBlur}
			onChange={onChange}
		>
			<option value={0} hidden>
				{defaultOption}
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
