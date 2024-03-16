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
	defaultOption: string;
	onBlur?: (e: React.FocusEvent) => void;
	onChange?: (e: React.ChangeEvent) => void;
}

export interface TaskListProps {
	tasks: TaskObject[];
	priorityId: string;
	priorityOptions: string[];
	priorityOnChange: (e: React.ChangeEvent) => void;
	projectId: string;
	projectOptions: string[];
	projectOnChange: (e: React.ChangeEvent) => void;
	defaultOption: string;
}

export interface TaskCardProps {
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

export interface RulesObject {
	priority: string;
	project: string;
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
