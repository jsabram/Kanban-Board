import { useState, useRef } from 'react';
import Form from '../reusable/Form';
import Select from '../reusable/Select';
import Button from '../reusable/Button';

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

			// create the actual task
			console.log(task);
		}
	};

	return (
		<Form onSubmit={createTask}>
			<label htmlFor='title'>
				Title <span>*</span>
			</label>
			<input
				type='text'
				id='title'
				ref={titleRef}
				className={`form__input ${
					isTitleValid === false && 'form__input--error'
				}`}
				onBlur={checkValidity}
			/>
			{isTitleValid === false && (
				<p className='form__error-msg'>Required field</p>
			)}
			<label htmlFor='description'>Description</label>
			<textarea
				id='description'
				ref={descriptionRef}
				className='form__input form__input--textarea'
			></textarea>
			<label htmlFor='priority'>Priority</label>
			<Select
				id='priority'
				ref={priorityRef}
				className='form__input form__input--select'
				options={priorities}
			/>
			<label htmlFor='assignee'>
				Assignee <span>*</span>
			</label>
			<Select
				id='assignee'
				ref={assigneeRef}
				className={`form__input form__input--select ${
					isAssigneeValid === false && 'form__input--error'
				}`}
				options={dummyAssignees}
				onBlur={checkValidity}
			/>
			{isAssigneeValid === false && (
				<p className='form__error-msg'>Required selection</p>
			)}
			<label htmlFor='project'>
				Project <span>*</span>
			</label>
			<Select
				id='project'
				ref={projectRef}
				className={`form__input form__input--select ${
					isProjectValid === false && 'form__input--error'
				}`}
				options={dummyProjects}
				onBlur={checkValidity}
			/>
			{isProjectValid === false && (
				<p className='form__error-msg'>Required selection</p>
			)}
			<Button
				text='Create Task'
				className='form__btn'
				disabled={!isTitleValid || !isAssigneeValid || !isProjectValid}
			/>
		</Form>
	);
};

export default CreateTask;
