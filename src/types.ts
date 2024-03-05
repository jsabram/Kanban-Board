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
	className: string;
	options: string[];
	onBlur?: (e: React.FocusEvent) => void;
}
