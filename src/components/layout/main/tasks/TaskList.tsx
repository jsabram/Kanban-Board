import { useState } from 'react';
import { useUtils } from '../../../../hooks/useUtils';
import {
	TaskListProps,
	TaskObject,
	FiltersObject,
	FilterObject,
	FilterCriteria,
} from '../../../../types';
import Select from '../../../reusable/Select';
import SelectedOption from '../../../reusable/SelectedOption';
import TaskCard from './TaskCard';

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

		const filteredResults = applyTaskFilter(tasks, updatedFilters);

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
					id={`${FilterCriteria.PRIORITY.toLowerCase()}-${listType}`} className='task-list__filters-select'
					options={priorityOptions}
					defaultOption={FilterCriteria.PRIORITY}
					value={FilterCriteria.PRIORITY}
					onChange={(e) => {
						filterTasks(e, FilterCriteria.PRIORITY.toLowerCase());
					}}
				/>
				<Select
					id={`${FilterCriteria.STATUS.toLowerCase()}-${listType}`} className='task-list__filters-select'
					options={statusOptions}
					defaultOption={FilterCriteria.STATUS}
					value={FilterCriteria.STATUS}
					onChange={(e) => {
						filterTasks(e, FilterCriteria.STATUS.toLowerCase());
					}}
				/>
				<Select
					id={`${FilterCriteria.PROJECT.toLowerCase()}-${listType}`} className='task-list__filters-select'
					options={projectOptions}
					defaultOption={FilterCriteria.PROJECT}
					value={FilterCriteria.PROJECT}
					onChange={(e) => {
						filterTasks(e, FilterCriteria.PROJECT.toLowerCase());
					}}
				/>
				{listType === 'all' && (
					<Select
						id={`${FilterCriteria.ASSIGNEE.toLowerCase()}-${listType}`} className='task-list__filters-select'
						options={assigneeOptions!}
						defaultOption={FilterCriteria.ASSIGNEE}
						value={FilterCriteria.ASSIGNEE}
						onChange={(e) => {
							filterTasks(e, FilterCriteria.ASSIGNEE.toLowerCase());
						}}
					/>
				)}
			</div>
			{filtersArr.length > 0 && (
				<div className='task-list__applied-filters'>
					<ul className='task-list__applied-filters-list'>
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
					<button onClick={resetFilters} className='task-list__applied-filters-btn'>Reset filters</button>
				</div>
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
