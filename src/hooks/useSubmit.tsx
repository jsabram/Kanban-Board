import { useState } from 'react';

export const useSubmit = () => {
	const [isTitleValid, setIsTitleValid] = useState<boolean | null>(null);
	const [isAssigneeValid, setIsAssigneeValid] = useState<boolean | null>(null);
	const [isProjectValid, setIsProjectValid] = useState<boolean | null>(null);

	const checkValidity = (e: React.FocusEvent) => {
		const target = e.target as HTMLInputElement | HTMLSelectElement;

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

	return { isTitleValid, isAssigneeValid, isProjectValid, checkValidity };
};
