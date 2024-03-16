import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './projectsSlice';

export const store = configureStore({
	reducer: {
		projectsData: projectsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
