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
	onBlur?: (e: React.FocusEvent) => void;
	onChange?: (e: React.ChangeEvent) => void;
}

export interface TaskObject {
	id: string;
	priority: string;
	title: string;
	description: string;
	status: string;
	project: string;
	assignee: string;
}

export interface TaskListProps {
	tasks: TaskObject[];
}

export interface TaskCardProps {
	priority: string;
	id: string;
	title: string;
	status: string;
	assignee: string;
	project: string;
}
