import { useState } from 'react';
import { useUtils } from '../../../../hooks/useUtils';
import {
	TaskListProps,
	TaskObject,
	FiltersObject,
	FilterObject,
} from '../../../../types';
import Select from '../../../reusable/Select';
import TaskCard from './TaskCard';
import SelectedOption from '../../../reusable/SelectedOption';

import './TaskList.scss';

const initialFilters = {
	priority: [],
	status: [],
	project: [],
	assignee: [],
};

const TaskList: React.FC<TaskListProps> = ({
	tasks,
	priorityOptions,
	projectOptions,
	statusOptions,
	assigneeOptions,
	listType,
}) => {
	const [filters, setFilters] = useState<FiltersObject>(initialFilters);
	const [filtersArr, setFiltersArr] = useState<FilterObject[]>([]);
	const [filteredTasks, setFilteredTasks] = useState<TaskObject[]>([]);

	const { applyTaskFilter } = useUtils();

	const filterTasks = (e: React.ChangeEvent, filterName: string) => {
		const target = e.target as HTMLSelectElement;
		const targetValue = target.value.toLowerCase();
		const filteredProperty = filterName as keyof typeof filters;

		if (
			filteredProperty.length === 0 ||
			!filteredProperty.includes(targetValue)
		) {
			const previousValue = filters[filteredProperty];

			if (!previousValue.includes(targetValue)) {
				const appliedFilters = {
					...filters,
					[filteredProperty]: [...previousValue, targetValue],
				};

				const filteredResults = applyTaskFilter(tasks, appliedFilters);

				setFilters(appliedFilters);
				setFiltersArr((previousState) => {
					return [
						...previousState,
						{
							filterName: filteredProperty,
							filterValue: target.value,
						},
					];
				});
				setFilteredTasks(filteredResults);
			}
		}
	};

	const removeFilter = (propertyName: string, propertyValue: string) => {
		if (filtersArr.length === 1) {
			resetFilters();
			return;
		}

		const updatedFiltersArr = filtersArr.filter(
			(filter) => filter.filterValue !== propertyValue
		);

		const updatedPropertyValue = filters[
			propertyName as keyof typeof filters
		].filter((value) => value !== propertyValue.toLowerCase());

		const updatedFilters = {
			...filters,
			[propertyName]: updatedPropertyValue,
		};

		const filteredResults = applyTaskFilter(filteredTasks, updatedFilters);

		setFilters(updatedFilters);
		setFiltersArr(updatedFiltersArr);
		setFilteredTasks(filteredResults);
	};

	const resetFilters = () => {
		setFilters(initialFilters);
		setFiltersArr([]);
		setFilteredTasks([]);
	};

	return (
		<div className='task-list'>
			<div className='task-list__filters'>
				<Select
					id={`priority-${listType}`}
					options={priorityOptions}
					defaultOption='Priority'
					value='Priority'
					onChange={(e) => {
						filterTasks(e, 'priority');
					}}
				/>
				<Select
					id={`status-${listType}`}
					options={statusOptions}
					defaultOption='Status'
					value='Status'
					onChange={(e) => {
						filterTasks(e, 'status');
					}}
				/>
				<Select
					id={`project-${listType}`}
					options={projectOptions}
					defaultOption='Project'
					value='Project'
					onChange={(e) => {
						filterTasks(e, 'project');
					}}
				/>
				{listType === 'all' && (
					<Select
						id={`assignee-${listType}`}
						options={assigneeOptions!}
						defaultOption='Assignee'
						value='Assignee'
						onChange={(e) => {
							filterTasks(e, 'assignee');
						}}
					/>
				)}
			</div>
			{filtersArr.length > 0 && (
				<>
					<ul>
						{filtersArr.map((filter, idx) => (
							<SelectedOption
								key={idx}
								onClick={() =>
									removeFilter(filter.filterName, filter.filterValue)
								}
								optionText={filter.filterValue}
							/>
						))}
					</ul>
					<button onClick={resetFilters}>Reset filters</button>
				</>
			)}
			<div>
				{filteredTasks.length === 0 &&
					filtersArr.length === 0 &&
					tasks.map((task, idx) => (
						<TaskCard
							key={idx}
							priority={task.priority}
							taskId={task.id}
							title={task.title}
							status={task.status}
							assignee={task.assignee}
							project={task.project}
						/>
					))}
				{filteredTasks.length > 0 &&
					filteredTasks.map((task, idx) => (
						<TaskCard
							key={idx}
							priority={task.priority}
							taskId={task.id}
							title={task.title}
							status={task.status}
							assignee={task.assignee}
							project={task.project}
						/>
					))}
				{filteredTasks.length === 0 && filtersArr.length > 0 && (
					<p className='task-list__msg'>No tasks match the selected criteria</p>
				)}
			</div>
		</div>
	);
};

export default TaskList;
