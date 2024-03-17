import { TaskObject, FiltersObject } from '../types';

export const useUtils = () => {
	const applyTaskFilter = (tasks: TaskObject[], appliedFilters: FiltersObject) => {
		const filteredResults = tasks.filter((task) => {
			if (
				appliedFilters.priority.length > 0 &&
				!appliedFilters.priority.includes(task.priority.toLowerCase())
			) {
				return false;
			}
			if (
				appliedFilters.status.length > 0 &&
				!appliedFilters.status.includes(task.status.toLowerCase())
			) {
				return false;
			}
			if (
				appliedFilters.project.length > 0 &&
				!appliedFilters.project.includes(task.project.toLowerCase())
			) {
				return false;
			}
			if (
				appliedFilters.assignee.length > 0 &&
				!appliedFilters.assignee.includes(task.assignee.toLowerCase())
			) {
				return false;
			}
			return true;
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
