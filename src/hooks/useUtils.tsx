import { TaskObject, Rules } from '../types';

export const useUtils = () => {
	const applyTaskFilter = (
		tasks: TaskObject[],
		newRules: Rules
	) => {
		let filteredArr: TaskObject[] = [];

		if (Object.values(newRules).every((el) => el === 'show all')) {
			filteredArr = tasks;
		} else if (Object.values(newRules).some((el) => el === 'show all')) {
			const ruleIdx = Object.values(newRules).indexOf('show all');
			const ruleKey = Object.keys(newRules)[ruleIdx];

			filteredArr =
				ruleKey !== 'priority'
					? tasks.filter(
							(task) => task.priority.toLowerCase() === newRules.priority
					  )
					: tasks.filter(
							(task) => task.project.toLowerCase() === newRules.project
					  );
		} else {
			filteredArr = tasks.filter(
				(task) =>
					task.priority.toLowerCase() === newRules.priority &&
					task.project.toLowerCase() === newRules.project
			);
		}

		return filteredArr;
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
