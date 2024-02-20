import React from 'react';

interface UiContextProps {
	createDropdown: boolean;
	searchDropdown: boolean;
	openDropdown: (id: string) => void;
	closeDropdowns: () => void;
	closeOnBlur: (e: MouseEvent, id: string) => void;
}

export const UiContext = React.createContext<UiContextProps>({
	createDropdown: false,
	searchDropdown: false,
	openDropdown: () => {},
	closeDropdowns: () => {},
	closeOnBlur: () => {},
});
