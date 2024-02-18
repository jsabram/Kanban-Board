import { useState } from 'react';
import { UiContext } from './ui-context';
import { ChildrenProps } from '../types';

export const UiContextProvider: React.FC<ChildrenProps> = ({ children }) => {
	const [createDropdown, setCreateDropdown] = useState(false);

	const openDropdown = (id: string) => {
		closeDropdowns();

		switch (id) {
			case 'create':
				setCreateDropdown(true);
				break;
			default:
				break;
		}
	};

	const closeDropdowns = () => {
		setCreateDropdown(false);
	};

	const closeOnBlur = (e: MouseEvent, id: string) => {
		const target = e.target as HTMLElement;

		if (target.id === 'create') {
			return;
		}

		closeDropdowns();
	};

	return (
		<UiContext.Provider
			value={{ createDropdown, openDropdown, closeDropdowns, closeOnBlur }}
		>
			{children}
		</UiContext.Provider>
	);
};
