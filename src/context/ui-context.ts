import React from 'react';

interface UiContextProps {
	createDropdown: boolean;
	searchDropdown: boolean;
	notificationsDropdown: boolean;
	userDropdown: boolean;
	openDropdown: (id: string) => void;
	resetDropdowns: () => void;
	closeOnBlur: (e: MouseEvent, id: string) => void;
}

export const UiContext = React.createContext<UiContextProps>({
	createDropdown: false,
	searchDropdown: false,
	notificationsDropdown: false,
	userDropdown: false,
	openDropdown: () => {},
	resetDropdowns: () => {},
	closeOnBlur: () => {},
});
