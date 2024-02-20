import { useState } from 'react';
import { UiContext } from './ui-context';
import { ChildrenProps } from '../types';

export const UiContextProvider: React.FC<ChildrenProps> = ({ children }) => {
	const [createDropdown, setCreateDropdown] = useState(false);
	const [searchDropdown, setSearchDropdown] = useState(false);

	const openDropdown = (id: string) => {
		closeDropdowns();

		switch (id) {
			case 'create':
				setCreateDropdown(true);
				break;
			case 'search':
				setSearchDropdown(true);
				break;
			default:
				break;
		}
	};

	const closeDropdowns = () => {
		setCreateDropdown(false);
		setSearchDropdown(false);
	};

	const closeOnBlur = (e: MouseEvent, id: string) => {
		const target = e.target as HTMLElement;

		// if (target.id === 'create') {
		// 	return;
		// }

		if (target.id === id) {
			return;
		}

		closeDropdowns();
	};

	return (
		<UiContext.Provider
			value={{
				createDropdown,
				searchDropdown,
				openDropdown,
				closeDropdowns,
				closeOnBlur,
			}}
		>
			{children}
		</UiContext.Provider>
	);
};
