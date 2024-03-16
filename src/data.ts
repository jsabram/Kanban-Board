import { nanoid } from 'nanoid';

enum Priorities {
	LOW = 'low',
	MEDIUM = 'medium',
	HIGH = 'high',
}

export const priorities = [Priorities.LOW, Priorities.MEDIUM, Priorities.HIGH];

enum TaskStatuses {
	TO_DO = 'To do',
	IN_PROGRESS = 'In progress',
	UNDER_REVIEW = 'Under review',
	BLOCKED = 'Blocked',
	DONE = 'Done',
}

export const taskStatuses = [
	TaskStatuses.TO_DO,
	TaskStatuses.IN_PROGRESS,
	TaskStatuses.UNDER_REVIEW,
	TaskStatuses.BLOCKED,
	TaskStatuses.DONE,
];

export const usersData = [
	{ name: 'Son Goku', username: 'songoku' },
	{
		name: 'Vegeta',
		username: 'vegeta',
	},
	{
		name: 'Piccolo',
		username: 'piccolo',
	},
	{ name: 'Bulma', username: 'bulma' },
	{ name: 'Krillin', username: 'krillin' },
	{ name: 'Son Gohan', username: 'songohan' },
	{ name: 'Master Roshi', username: 'masterroshi' },
	{ name: 'Tien Shinhan', username: 'tienshinhan' },
	{ name: 'Yamcha', username: 'yamcha' },
	{ name: 'Trunks', username: 'trunks' },
	{ name: 'Son Goten', username: 'songoten' },
	{ name: 'Frieza', username: 'frieza' },
	{ name: 'Cell', username: 'cell' },
	{ name: 'Raditz', username: 'raditz' },
	{
		name: 'Whis',
		username: 'whis',
	},
	{ name: 'Beerus', username: 'beerus' },
	{ name: 'Majin Buu', username: 'majinbuu' },
	{ name: 'Mr. Satan', username: 'mrsatan' },
	{ name: 'Chichi', username: 'chichi' },
	{ name: 'Videl', username: 'videl' },
	{ name: 'Android 18', username: 'android18' },
];

enum Projects {
	FRONTEND = 'frontend',
	BACKEND = 'backend',
	UX_UI = 'ux_ui',
	AI = 'ai',
	QA = 'qa',
}

export const projectsData = [
	{
		projectName: 'Frontend',
		projectId: Projects.FRONTEND,
		projectDescription:
			'This board is used for tracking tasks within the Frontend Development team',
		collaborators: ['bulma', 'mrsatan', 'masterroshi', 'chichi'],
		tasks: [
			{
				id: `task-${nanoid()}`,
				priority: Priorities.LOW,
				title: 'Remove comments from the Header.tsx file',
				description:
					'There are some unnecessary comments left in the Header.tsx file that should be removed.',
				status: TaskStatuses.TO_DO,
				project: Projects.FRONTEND,
				assignee: 'bulma',
			},
			{
				id: `task-${nanoid()}`,
				priority: Priorities.MEDIUM,
				title: 'Implement responsive navigation bar',
				description: 'The application is missing a responsive navbar.',
				status: TaskStatuses.IN_PROGRESS,
				project: Projects.FRONTEND,
				assignee: 'mrsatan',
			},
			{
				id: `task-${nanoid()}`,
				priority: Priorities.HIGH,
				title: 'Fix padding in the articles section',
				description:
					'Padding in the articles section is uneven and needs to be corrected ASAP.',
				status: TaskStatuses.DONE,
				project: Projects.FRONTEND,
				assignee: 'chichi',
			},
			{
				id: `task-${nanoid()}`,
				priority: Priorities.LOW,
				title: 'Remove duplicate components in the CRUD Markdown app',
				description:
					'There are two identical component files in the Markdown app repository and one has to be removed.',
				status: TaskStatuses.UNDER_REVIEW,
				project: Projects.FRONTEND,
				assignee: 'masterroshi',
			},
		],
	},
	{
		projectName: 'Backend',
		projectId: Projects.BACKEND,
		projectDescription:
			'This board is used for tracking tasks within the Backend Development team',
		collaborators: ['tienshinhan', 'videl', 'piccolo'],
		tasks: [
			{
				id: `task-${nanoid()}`,
				priority: Priorities.HIGH,
				title:
					'Update API endpoints for enhanced security measures in the Markdown app project',
				description:
					'This task involves enhancing the security posture of the Markdown app project by updating its API endpoints. By implementing industry-standard security measures, such as authentication, authorization, and data validation, we aim to safeguard user data and protect against potential security threats.',
				status: TaskStatuses.IN_PROGRESS,
				project: Projects.BACKEND,
				assignee: 'videl',
			},
			{
				id: `task-${nanoid()}`,
				priority: Priorities.MEDIUM,
				title:
					'Refactor database queries to improve performance in the OnBoard app.',
				description: `Your goal is to optimize query execution, ultimately enhancing the application's responsiveness and delivering a more seamless user experience`,
				status: TaskStatuses.DONE,
				project: Projects.BACKEND,
				assignee: 'videl',
			},
			{
				id: `task-${nanoid()}`,
				priority: Priorities.LOW,
				title:
					'Implement user authentication and authorization features in the OnBoard app project',
				description:
					'The assignment is to implement user authentication and authorization features within the Markdown App project.',
				status: TaskStatuses.TO_DO,
				project: Projects.BACKEND,
				assignee: 'piccolo',
			},
			{
				id: `task-${nanoid()}`,
				priority: Priorities.MEDIUM,
				title:
					'Resolve data validation issues to prevent potential vulnerabilities in the Markdown app',
				description:
					'Your role involves addressing data validation issues within the Markdown App project to mitigate potential vulnerabilities.',
				status: TaskStatuses.BLOCKED,
				project: Projects.BACKEND,
				assignee: 'tienshinhan',
			},
			{
				id: `task-${nanoid()}`,
				priority: Priorities.LOW,
				title:
					'Optimize file upload functionality for better scalability in the Markdown App project',
				description:
					'Your task is to optimize the file upload functionality in the Markdown App project to enhance scalability.',
				status: TaskStatuses.TO_DO,
				project: Projects.BACKEND,
				assignee: 'piccolo',
			},
		],
	},
	{
		projectName: 'UX/UI',
		projectId: Projects.UX_UI,
		projectDescription:
			'This board is used for tracking tasks within the AI Engineering team',
		collaborators: ['majinbuu', 'krillin', 'android18'],
		tasks: [
			{
				id: `task-${nanoid()}`,
				priority: Priorities.LOW,
				title: 'Perform usability testing on the Markdown App',
				description:
					'Perform usability testing on the Markdown App project to identify pain points and areas for improvement, refining interface elements and interactions based on user feedback.',
				status: TaskStatuses.IN_PROGRESS,
				project: Projects.UX_UI,
				assignee: 'android18',
			},
			{
				id: `task-${nanoid()}`,
				priority: Priorities.LOW,
				title:
					'Design intuitive and visually appealing icons for the OnBoard app',
				description:
					'Design intuitive and visually appealing icons and graphics to enhance the user experience and brand identity within the OnBoard app.',
				status: TaskStatuses.TO_DO,
				project: Projects.UX_UI,
				assignee: 'majinbuu',
			},
			{
				id: `task-${nanoid()}`,
				priority: Priorities.MEDIUM,
				title:
					'Create wireframes and prototypes to iterate on new features and functionalities',
				description:
					'Create wireframes and prototypes to iterate on new features and functionalities, ensuring a user-centric approach in the development process.',
				status: TaskStatuses.DONE,
				project: Projects.UX_UI,
				assignee: 'krillin',
			},
			{
				id: `task-${nanoid()}`,
				priority: Priorities.LOW,
				title:
					'Conduct user research to gather feedback and insights for improving the navigation flow and layout of the Markdown app project',
				description: '',
				status: TaskStatuses.IN_PROGRESS,
				project: Projects.UX_UI,
				assignee: 'krillin',
			},
		],
	},
	{
		projectName: 'AI',
		projectId: Projects.AI,
		projectDescription:
			'This board is used for tracking tasks within the UX and UI Design team',
		collaborators: ['songohan', 'cell', 'frieza'],
		tasks: [
			{
				id: `task-${nanoid()}`,
				priority: Priorities.HIGH,
				title:
					'Develop a machine learning model for sentiment analysis to analyze user feedback and sentiment trends within the Markdown App project',
				description: '',
				status: TaskStatuses.IN_PROGRESS,
				project: Projects.AI,
				assignee: 'songohan',
			},
			{
				id: `task-${nanoid()}`,
				priority: Priorities.LOW,
				title: 'Create a recommendation system for a music streaming service',
				description:
					'Create a recommendation system for a music streaming service to personalize song suggestions for users based on their listening history and preferences.',
				status: TaskStatuses.BLOCKED,
				project: Projects.AI,
				assignee: 'frieza',
			},
			{
				id: `task-${nanoid()}`,
				priority: Priorities.MEDIUM,
				title:
					'Develop a computer vision algorithm for object detection to assist in inventory managent',
				description: '',
				status: TaskStatuses.TO_DO,
				project: Projects.AI,
				assignee: 'cell',
			},
		],
	},
	{
		projectName: 'QA',
		projectId: Projects.QA,
		projectDescription:
			'This board is used for tracking tasks within the Quality Assurance team',
		collaborators: ['vegeta', 'beerus', 'trunks'],
		tasks: [
			{
				id: `task-${nanoid()}`,
				priority: Priorities.MEDIUM,
				title: 'Conduct usability testing sessions with end-users',
				description: `Facilitate usability testing sessions with end-users to gather valuable feedback on the application's interface and overall user experience. This involves planning and executing user tests, observing user interactions, and collecting actionable insights to enhance the usability and effectiveness of the product.`,
				status: TaskStatuses.TO_DO,
				project: Projects.QA,
				assignee: 'vegeta',
			},
			{
				id: `task-${nanoid()}`,
				priority: Priorities.LOW,
				title: 'Conduct usability testing sessions with end-users',
				description: `Perform thorough regression testing on the latest web release to ensure that new features, bug fixes, and changes haven't introduced any unintended issues or regressions. This involves systematically testing all functionalities of the web application to verify its stability and reliability across different browsers and devices, helping maintain a high standard of quality before deployment.`,
				status: TaskStatuses.TO_DO,
				project: Projects.QA,
				assignee: 'beerus',
			},
			{
				id: `task-${nanoid()}`,
				priority: Priorities.HIGH,
				title: 'Financial software security testing',
				description: `Conduct comprehensive security testing on the financial software to identify and address potential vulnerabilities and threats. This involves assessing the application's resilience against various security risks, such as unauthorized access, data breaches, and manipulation, ensuring that sensitive financial data is protected and compliant with industry standards and regulations.`,
				status: TaskStatuses.DONE,
				project: Projects.QA,
				assignee: 'trunks',
			},
		],
	},
];
