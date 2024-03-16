import { createSlice } from '@reduxjs/toolkit';
import { ProjectsSliceObject } from '../types';

const initialState: ProjectsSliceObject = {
	projects: [],
	users: [],
};

const projectsSlice = createSlice({
	name: 'projects',
	initialState,
	reducers: {
		setInitialData: (state, action) => {
            state.projects = action.payload.projects;
            state.users = action.payload.users
		},
	},
});

export const { setInitialData } = projectsSlice.actions;
export default projectsSlice.reducer;
