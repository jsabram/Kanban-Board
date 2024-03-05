import { useState } from 'react';
import Form from '../reusable/Form';
import Button from '../reusable/Button';

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

	const selectCollaborator = (e: React.ChangeEvent) => {
		const target = e.target as HTMLSelectElement;

		const selectedPerson = availableCollaborators.find(
			(el) => el.id === +target.value
		);

		if (selectedPerson) {
			setSelectedCollaborators([...selectedCollaborators, selectedPerson]);
			setAvailableCollaborators(
				availableCollaborators.filter((el) => el.id !== selectedPerson.id)
			);
		}
	};

	const createBoard = (e: React.FormEvent) => {
		console.log('Board Created!');
	};

	return (
		<Form onSubmit={createBoard}>
			<label htmlFor='title'>
				Title <span>*</span>
			</label>
			<input id='title' type='text' className='form__input' />
			<label htmlFor='description'>Description</label>
			<textarea
				id='description'
				className='form__input  form__input--textarea'
			></textarea>
			<label htmlFor='collaborators'>Add collaborators</label>
			{/* consider refactoring this select element to the reusable component */}
			<select
				className='form__input form__input--select'
				onChange={selectCollaborator}
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
				<ul>
					{selectedCollaborators.map((person) => (
						<li key={person.id}>{person.username}</li>
					))}
				</ul>
			)}
			<Button className='form__btn' text='Create Board' />
		</Form>
	);
};

export default CreateBoard;
