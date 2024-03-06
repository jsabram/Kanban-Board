import { TaskObject } from '../types';

export const useUtils = () => {
	const sortByPriority = (tasks: TaskObject[]) => {
		return tasks.sort((a, b) => {
			const order = { low: 1, medium: 2, high: 3 };
			return (
				order[a.priority as keyof typeof order] -
				order[b.priority as keyof typeof order]
			);
		});
	};

	const capitalize = (text: string) => {
		const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);

		return capitalizedText;
	};

	return { sortByPriority, capitalize };
};
