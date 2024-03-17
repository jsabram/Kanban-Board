import { TaskObject, FiltersObject } from '../types';

export const useUtils = () => {
	const applyTaskFilter = (
		tasks: TaskObject[],
		appliedFilters: FiltersObject
	) => {
		const filteredResults = tasks.filter((task) => {
			return Object.entries(appliedFilters).every(([key, value]) => {
				return (
					value.length === 0 ||
					value.includes(task[key as keyof typeof task].toLowerCase())
				);
			});
		});

		return filteredResults;
	};

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

	return { applyTaskFilter, sortByPriority, capitalize };
};
