import { useState } from 'react';
import { useSubmit } from '../../hooks/useSubmit';
import Form from '../reusable/Form';
import Button from '../reusable/Button';
import RemoveIcon from '../icon-components/RemoveIcon';

import './CreateBoard.scss';

// dummy data to be deleted / moved somewhere else

interface Collaborator {
	id: number;
	username: string;
}

const dummyCollaboratos: Collaborator[] = [
	{ id: 1, username: 'Jane' },
	{ id: 2, username: 'Josh' },
	{ id: 3, username: 'Joe' },
	{ id: 4, username: 'Jenny' },
	{ id: 5, username: 'Joanne' },
	{ id: 6, username: 'Judith' },
];

const CreateBoard = () => {
	const [availableCollaborators, setAvailableCollaborators] = useState(
		dummyCollaboratos
	);
	const [selectedCollaborators, setSelectedCollaborators] = useState<
		Collaborator[]
	>([]);

	const { isTitleValid, checkValidity } = useSubmit();

	const addCollaborator = (e: React.ChangeEvent) => {
		const target = e.target as HTMLSelectElement;

		const collaborator = availableCollaborators.find(
			(el) => el.id === +target.value
		);

		updateCollaborators(collaborator!, 'add');
	};

	const removeCollaborator = (id: number) => {
		const collaborator = selectedCollaborators.find((el) => el.id === id);

		updateCollaborators(collaborator!, 'remove');
	};

	const updateCollaborators = (
		collaborator: Collaborator,
		action: 'add' | 'remove'
	) => {
		if (action === 'add') {
			setSelectedCollaborators([...selectedCollaborators, collaborator]);
			setAvailableCollaborators(
				availableCollaborators.filter((el) => el.id !== collaborator.id)
			);
		} else {
			setAvailableCollaborators([...availableCollaborators, collaborator]);
			setSelectedCollaborators(
				selectedCollaborators.filter((el) => el.id !== collaborator.id)
			);
		}
	};

	const createBoard = (e: React.FormEvent) => {
		e.preventDefault();

		console.log('Board Created!');
	};

	return (
		<Form onSubmit={createBoard}>
			<label htmlFor='title'>
				Title <span>*</span>
			</label>
			<input
				id='title'
				type='text'
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
				className='form__input  form__input--textarea'
			></textarea>
			<label htmlFor='collaborators'>Add collaborators</label>
			<select
				className='form__input form__input--select'
				onChange={addCollaborator}
				disabled={availableCollaborators.length === 0}
			>
				{availableCollaborators.length > 0 ? (
					<>
						<option value={0} hidden>
							-
						</option>
						{availableCollaborators.map((person) => (
							<option key={person.id} value={person.id}>
								{person.username}
							</option>
						))}
					</>
				) : (
					<option>No available collaborators</option>
				)}
			</select>
			{selectedCollaborators.length > 0 && (
				<ul className='collaborators'>
					{selectedCollaborators.map((person) => (
						<div className='collaborator'>
							<li className='collaborator__username' key={person.id}>
								{person.username}{' '}
							</li>
							<button
								type='button'
								className='collaborator__remove-btn'
								onClick={() => removeCollaborator(person.id)}
							>
								<RemoveIcon />
							</button>
						</div>
					))}
				</ul>
			)}
			<Button
				className='form__btn'
				text='Create Board'
				disabled={!isTitleValid}
			/>
		</Form>
	);
};

export default CreateBoard;
