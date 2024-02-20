import { useState } from 'react';
import { UiContext } from './ui-context';
import { ChildrenProps } from '../types';

export const UiContextProvider: React.FC<ChildrenProps> = ({ children }) => {
	const [createDropdown, setCreateDropdown] = useState(false);
	const [searchDropdown, setSearchDropdown] = useState(false);
	const [notificationsDropdown, setNotificationsDropdown] = useState(false);
	const [userDropdown, setUserDropdown] = useState(false);

	const openDropdown = (id: string) => {
		resetDropdowns();

		switch (id) {
			case 'create':
				setCreateDropdown(true);
				break;
			case 'search':
				setSearchDropdown(true);
				break;
			case 'notifications':
				setNotificationsDropdown(true);
				break;
			case 'user':
				setUserDropdown(true);
				break;
			default:
				break;
		}
	};

	const closeDropdown = (id: string) => {
		switch (id) {
			case 'create':
				setCreateDropdown(false);
				break;
			case 'search':
				setSearchDropdown(false);
				break;
			case 'notifications':
				setNotificationsDropdown(false);
				break;
			case 'user':
				setUserDropdown(false);
				break;
			default:
				break;
		}
	};

	const resetDropdowns = () => {
		setCreateDropdown(false);
		setSearchDropdown(false);
		setNotificationsDropdown(false);
		setUserDropdown(false);
	};

	const closeOnBlur = (e: MouseEvent, id: string) => {
		const target = e.target as HTMLElement;

		if (target.id === id) {
			return;
		}

		closeDropdown(id);
	};

	return (
		<UiContext.Provider
			value={{
				createDropdown,
				searchDropdown,
				notificationsDropdown,
				userDropdown,
				openDropdown,
				resetDropdowns,
				closeOnBlur,
			}}
		>
			{children}
		</UiContext.Provider>
	);
};
