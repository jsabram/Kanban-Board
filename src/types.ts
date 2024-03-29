// Component types

export interface ChildrenProps {
	children: React.ReactNode;
}

export interface LinksDropdownProps extends ChildrenProps {
	className: string;
}

export interface ButtonProps {
	text: string;
	className?: string;
	onClick?: () => void;
	disabled?: boolean;
}

export interface FormProps extends ChildrenProps {
	onSubmit: (e: React.FormEvent) => void;
}

export interface SelectProps {
	id: string;
	className?: string;
	options: string[];
	defaultOption?: string;
	value?: string;
	onBlur?: (e: React.FocusEvent) => void;
	onChange?: (e: React.ChangeEvent) => void;
}

export interface SelectedOptionProps {
	optionText: string;
	onClick: () => void;
}

export interface TaskListProps {
	tasks: TaskObject[];
	priorityOptions: string[];
	projectOptions: string[];
	statusOptions: string[];
	assigneeOptions?: string[];
	listType: 'assigned' | 'all';
}

export interface TaskCardProps {
	className?: string;
	priority: string;
	taskId: string;
	title: string;
	status: string;
	assignee: string;
	project: string;
}

export interface SearchResultsProps {
	isDropdownActive: boolean;
	tasks: TaskObject[];
}

export interface SearchResultProps {
	taskTitle: string;
	taskId: string;
	taskAssignee: string;
	taskProject: string;
}

export interface BoardColumnProps {
	statusName: string;
	tasks: TaskObject[];
}

// Other types

export interface TaskObject {
	id: string;
	priority: string;
	title: string;
	description: string;
	status: string;
	project: string;
	assignee: string;
}

export interface ProjectObject {
	projectName: string;
	projectId: string;
	projectDescription: string;
	collaborators: string[];
	tasks: TaskObject[];
}

export interface UserObject {
	name: string;
	username: string;
}

export interface FilterObject {
	filterName: string;
	filterValue: string;
}

export interface FiltersObject {
	priority: string[];
	status: string[];
	project: string[];
	assignee: string[];
}

export interface NotificationObject {
	id: string;
	body: string;
	isNew: boolean;
}

// Redux

export interface ProjectsSliceObject {
	projects: ProjectObject[];
	users: UserObject[];
}

// Enums

export enum TaskStatuses {
	TO_DO = 'To do',
	IN_PROGRESS = 'In progress',
	UNDER_REVIEW = 'Under review',
	BLOCKED = 'Blocked',
	DONE = 'Done',
}

export enum FilterCriteria {
	PRIORITY = 'Priority',
	STATUS = 'Status',
	PROJECT = 'Project',
	ASSIGNEE = 'Assignee',
}
