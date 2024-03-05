import Button from '../reusable/Button';

import './CreateTask.scss';

const CreateTask = () => {
	const createTask = (e: React.FormEvent) => {
		e.preventDefault();
	};

	return (
		<form action='' onSubmit={createTask} className='create'>
			<label className='create__label' htmlFor='title'>
				Title <span className='create__label--asterisk'>*</span>
			</label>
			<input
				type='text'
				id='title'
				className='create__input create__input--error'
			/>
			<p className='create__error-msg'>Required field</p>
			<label className='create__label' htmlFor='description'>
				Description
			</label>
			<textarea
				id='description'
				className='create__input create__input--textarea'
			></textarea>
			<label className='create__label' htmlFor='priority'>
				Priority
			</label>
			<select id='priority' className='create__input create__input--select'>
				<option value='1'>Low</option>
				<option value='2'>Medium</option>
				<option value='3'>High</option>
			</select>
			<label className='create__label' htmlFor='assignee'>
				Assignee <span className='create__label--asterisk'>*</span>
			</label>
			<select id='assignee' className='create__input create__input--select'>
				<option value='0' hidden>
					-
				</option>
				<option value='1'>employee 1</option>
				<option value='2'>employee 2</option>
				<option value='3'>employee 3</option>
			</select>
			<p className='create__error-msg'>Required selection</p>
			<label className='create__label' htmlFor='project'>
				Project <span className='create__label--asterisk'>*</span>
			</label>
			<select
				id='project'
				className='create__input create__input--select  create__input--error'
			>
				<option value='0' hidden>
					-
				</option>
				<option value='1'>project 1</option>
				<option value='2'>project 2</option>
				<option value='3'>project 3</option>
			</select>
			<p className='create__error-msg'>Required selection</p>

			<Button text='Create Task' className='create__btn' />
		</form>
	);
};

export default CreateTask;
