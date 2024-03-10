export const dummyProjects = ['Frontend', 'Backend', 'AI'];
export const dummyPriorities = ['Low', 'Medium', 'High'];
export const dummyTaskStatuses = [
	'To do',
	'Researching',
	'In progress',
	'Under review',
	'Blocked',
	'Done',
];

export const dummyTasks = [
	{
		id: 'task-1',
		priority: 'low',
		title: 'Remove comments in script.js file',
		description:
			'Remove comments in script.js file before pushing for production.',
		status: 'to do',
		project: 'frontend',
		assignee: 'user',
	},
	{
		id: 'task-2',
		priority: 'medium',
		title: 'Fix padding in the articles section',
		description:
			'Padding in the articles section is uneven and needs to be corrected.',
		status: 'under review',
		project: 'frontend',
		assignee: 'user',
	},
	{
		id: 'task-3',
		priority: 'high',
		title: 'Fix dependencies in the Markdown App project',
		description:
			'Dependencies are exposing sensitive data and have to be fixed asap.',
		status: 'in progress',
		project: 'backend',
		assignee: 'user',
	},
	{
		id: 'task-4',
		priority: 'low',
		title: 'Remove dummyData.ts file from the project repository',
		description: '',
		status: 'researching',
		project: 'backend',
		assignee: 'John',
	},
	{
		id: 'task-5',
		priority: 'medium',
		title: 'Create documentation on the new Personal AI Assistant features',
		description:
			'Personal AI Assistant now includes additioncal functionalities that must be documented for the users',
		status: 'blocked',
		project: 'AI',
		assignee: 'josh',
	},
	{
		id: 'task-6',
		priority: 'high',
		title:
			'Implement a basic image classification model using a pre-trained deep learning model',
		description:
			'The task involves implementing a basic image classification system using a pre-trained deep learning model. The model will classify images into predefined categories',
		status: 'in progress',
		project: 'AI',
		assignee: 'jane',
	},
	{
		id: 'task-7',
		priority: 'high',
		title: 'Create a prototype for a voice-controlled virtual assistant',
		description:
			'The task involves creating a prototype for a voice-controlled virtual assistant that can perform basic tasks such as answering questions, setting reminders, and providing weather updates. This prototype will serve as a proof of concept for integrating voice recognition and natural language understanding capabilities into an AI system.',
		status: 'done',
		project: 'AI',
		assignee: 'user',
	},
	{
		id: 'task-8',
		priority: 'medium',
		title: 'Clean up code in the index.html file',
		description: '',
		status: 'To do',
		project: 'Frontend',
		assignee: 'user',
	},
];
