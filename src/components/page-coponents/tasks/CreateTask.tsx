import { useRef } from 'react';
import { useSubmit } from '../../../hooks/useSubmit';
import PageHeading from '../../reusable/PageHeading';
import Form from '../../reusable/Form';
import Select from '../../reusable/Select';
import Button from '../../reusable/Button';

// dummy data to be replaced
const priorities = ['Low', 'Medium', 'High'];
const dummyAssignees = ['Eric', 'Jessica', 'Bob'];
const dummyProjects = ['Frontend', 'Backend', 'AI'];

const CreateTask = () => {
	const titleRef = useRef<HTMLInputElement | null>(null);
	const descriptionRef = useRef<HTMLTextAreaElement | null>(null);
	const priorityRef = useRef<HTMLSelectElement | null>(null);
	const assigneeRef = useRef<HTMLSelectElement | null>(null);
	const projectRef = useRef<HTMLSelectElement | null>(null);

	const {
		isTitleValid,
		isAssigneeValid,
		isProjectValid,
		checkValidity,
	} = useSubmit();

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
		<>
			<PageHeading>Create a task</PageHeading>
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
					defaultOption='-'
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
					defaultOption='-'
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
					defaultOption='-'
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
		</>
	);
};

export default CreateTask;
