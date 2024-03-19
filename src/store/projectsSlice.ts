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
			const { projects, users } = action.payload;

			state.projects = projects;
			state.users = users;
		},
		changeTaskStatus: (state, action) => {
			const { taskId, taskProject, newStatus } = action.payload;

			const project = state.projects.find(
				(project) =>
					project.projectName.toLowerCase() === taskProject.toLowerCase()
			);

			if (!project) {
				return;
			}

			const task = project.tasks.find((task) => task.id === taskId);

			if (!task) {
				return;
			}

			task.status = newStatus;
		},
	},
});

export const { setInitialData, changeTaskStatus } = projectsSlice.actions;
export default projectsSlice.reducer;
