import { FormProps } from '../../types';

import './Form.scss';

const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
	return (
		<form className='form' onSubmit={onSubmit}>
			{children}
		</form>
	);
};

export default Form;
