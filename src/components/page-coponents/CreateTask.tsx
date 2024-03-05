import { useState, useRef } from 'react';
import Select from '../reusable/Select';
import Button from '../reusable/Button';

import './CreateTask.scss';

// dummy data to be replaced
const priorities = ['Low', 'Medium', 'High'];
const dummyAssignees = ['Eric', 'Jessica', 'Bob'];
const dummyProjects = ['Frontend', 'Backend', 'AI'];

const CreateTask = () => {
	const [isTitleValid, setIsTitleValid] = useState<boolean | null>(null);
	const [isAssigneeValid, setIsAssigneeValid] = useState<boolean | null>(null);
	const [isProjectValid, setIsProjectValid] = useState<boolean | null>(null);

	const titleRef = useRef<HTMLInputElement | null>(null);
	const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
	const priorityRef = useRef<HTMLSelectElement | null>(null);
	const assigneeRef = useRef<HTMLSelectElement | null>(null);
	const projectRef = useRef<HTMLSelectElement | null>(null);

	const checkValidity = (e: React.FocusEvent) => {
		const target = e.target as HTMLSelectElement | HTMLInputElement;

		switch (target.id) {
			case 'title':
				target.value.trim().length === 0
					? setIsTitleValid(false)
					: setIsTitleValid(true);
				break;
			case 'assignee':
				+target.value === 0
					? setIsAssigneeValid(false)
					: setIsAssigneeValid(true);
				break;
			case 'project':
				+target.value === 0
					? setIsProjectValid(false)
					: setIsProjectValid(true);
				break;
			default:
				break;
		}
	};

	const createTask = (e: React.FormEvent) => {
		e.preventDefault();

		if (isTitleValid && isAssigneeValid && isProjectValid) {
			const task = {
				title: titleRef.current?.value,
				description: descriptionRef.current?.value,
				priority: priorityRef.current?.value,
				assignee: assigneeRef.current?.value,
				project: projectRef.current?.value,
			};

			console.log(task);
		}
	};

	return (
		<form onSubmit={createTask} className='create'>
			<label className='create__label' htmlFor='title'>
				Title <span className='create__label--asterisk'>*</span>
			</label>
			<input
				type='text'
				id='title'
				ref={titleRef}
				className={`create__input ${
					isTitleValid === false && 'create__input--error'
				}`}
				onBlur={checkValidity}
			/>
			{isTitleValid === false && (
				<p className='create__error-msg'>Required field</p>
			)}
			<label className='create__label' htmlFor='description'>
				Description
			</label>
			<textarea
				id='description'
				ref={descriptionRef}
				className='create__input create__input--textarea'
			></textarea>
			<label className='create__label' htmlFor='priority'>
				Priority
			</label>
			<Select
				id='priority'
				ref={priorityRef}
				className='create__input create__input--select'
				options={priorities}
			/>
			<label className='create__label' htmlFor='assignee'>
				Assignee <span className='create__label--asterisk'>*</span>
			</label>
			<Select
				id='assignee'
				ref={assigneeRef}
				className={`create__input create__input--select ${
					isAssigneeValid === false && 'create__input--error'
				}`}
				options={dummyAssignees}
				onBlur={checkValidity}
			/>
			{isAssigneeValid === false && (
				<p className='create__error-msg'>Required selection</p>
			)}
			<label className='create__label' htmlFor='project'>
				Project <span className='create__label--asterisk'>*</span>
			</label>
			<Select
				id='project'
				ref={projectRef}
				className={`create__input create__input--select ${
					isProjectValid === false && 'create__input--error'
				}`}
				options={dummyProjects}
				onBlur={checkValidity}
			/>
			{isProjectValid === false && (
				<p className='create__error-msg'>Required selection</p>
			)}
			<Button
				text='Create Task'
				className='create__btn'
				disabled={!isTitleValid || !isAssigneeValid || !isProjectValid}
			/>
		</form>
	);
};

export default CreateTask;
