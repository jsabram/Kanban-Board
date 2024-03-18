import { SelectedOptionProps } from '../../types';
import RemoveIcon from '../icon-components/RemoveIcon';

import './SelectedOption.scss';

const SelectedOption: React.FC<SelectedOptionProps> = ({
	optionText,
	onClick,
}) => {
	return (
		<li className='selected-option'>
			<p className='selected-option__text'>{optionText}</p>
			<button
				type='button'
				className='selected-option__remove-btn'
				onClick={onClick}
			>
				<RemoveIcon />
			</button>
		</li>
	);
};

export default SelectedOption;
