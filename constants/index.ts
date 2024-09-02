import {
	RxCrop,
	RxDesktop,
	RxPencil2,
	RxReader,
	RxRocket,
	RxAccessibility,
	RxHome,
	RxPerson,
	RxDashboard,
	RxBackpack,
} from 'react-icons/rx'

import project05Big from '../public/assets/projects/full_auth.png'

import project01Big from '../public/assets/projects/MrFox.png'

import project02Big from '../public/assets/projects/PortfolioMain.png'

import project03Big from '../public/assets/projects/Portfoliov2.png'

import project04Big from '../public/assets/projects/TodoList.png'

export const Socials = [
	{
		id: 1,
		name: 'LinkedIn',
		src: '/assets/icons/linkedIn.svg',
		link: 'https://www.linkedin.com/in/andrii-tynnyi-a6612021b/',
	},
	{
		id: 2,
		name: 'GitHub',
		src: '/assets/icons/gitHub.svg',
		link: 'https://github.com/Noranmo?tab=repositories',
	},
	{
		id: 3,
		name: 'Instagram',
		src: '/assets/instagram.svg',
		link: 'https://www.instagram.com/tynnyi_andrii/',
	},
]

export const NavLinks = [
	{
		id: 1,
		name: 'Home',
		icon: RxHome,
		link: '/',
	},
	// {
	// 	id: 2,
	// 	name: 'Skills',
	// 	icon: RxPerson,
	// 	link: '/my-skills',
	// },
	{
		id: 3,
		name: 'Project',
		icon: RxBackpack,
		link: '/my-experience',
	},
	{
		id: 4,
		name: 'Projects',
		icon: RxDashboard,
		link: '/my-projects',
	},
	{
		id: 4,
		name: 'Contact',
		icon: RxPencil2,
		link: '/my-contacts',
	},
]

export const ProImages = [
	{
		id: 0,
		src: '/assets/projects/full_auth.png',
		bigImage: project05Big,
		title: 'MrFox Gold',
		skills: 'React, TypeScript, Node.js, Plaid, Appwrite, Dwolla, Sentry, Chart.js, ShadCn/ui',
		githubLink: 'https://github.com/Noranmo/Banking-App',
	},
	{
		id: 1,
		src: '/assets/projects/PortfolioMain.png',
		bigImage: project02Big,
		title: 'Main Portfolio',
		skills: 'React.js, TypeScript, Node.js, TailwindCss, CSS',
		githubLink: 'https://github.com/Noranmo/PortfolioMain',
	},
	{
		id: 2,
		src: '/assets/projects/Portfoliov2.png',
		bigImage: project03Big,
		title: 'Portfolio website',
		skills: 'React.js, React-router-dom, JS, CSS',
		githubLink: 'https://github.com/Noranmo/Portfolio_React',
	},
	{
		id: 3,
		src: '/assets/projects/TodoList.png',
		bigImage: project04Big,
		title: 'To-do List',
		skills: 'React.js, TypeScript, Redux, Unit Tests, StoryBook, API',
		githubLink: 'https://github.com/Noranmo/Todo-list',
	},
]

export const ProImages2 = [
	{
		id: 4,
		src: '/assets/projects/MrFox.png',
		bigImage: project01Big,
		title: 'MrFox webShop',
		skills: 'HTML, CSS, SCSS, JS, EJS, Node.js, Express.js',
		githubLink: 'https://github.com/Noranmo/MrFox',
	},
	// {
	// 	id: 5,
	// 	src: '/assets/projects/Orange2.jpeg',
	// 	title: 'Project 6',
	// 	skills: 'HTML, CSS, JS',
	// 	githubLink: 'https://github.com',
	// },
	// {
	// 	id: 6,
	// 	src: '/assets/projects/Orange3.jpeg',
	// 	title: 'Project 7',
	// 	skills: 'HTML, CSS, JS',
	// 	githubLink: 'https://github.com',
	// },
	// {
	// 	id: 7,
	// 	src: '/assets/projects/Orange4.jpeg',
	// 	title: 'Project 8',
	// 	skills: 'HTML, CSS, JS',
	// 	githubLink: 'https://github.com',
	// },
]

export const ServiceData = [
	{
		id: 1,
		icon: RxReader,
		title: 'HTML5 + CSS3',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		backgroundImage: '/assets/space/SpaceCity1.jpg',
	},
	{
		id: 2,
		icon: RxCrop,
		title: 'SASS/ SCSS',
		content: 'Lorem ipsum dolor sit /amet, consectetur adipiscing elit.',
		backgroundImage: '/assets/space/SpaceCity5.jpeg',
	},
	{
		id: 3,
		icon: RxDesktop,
		title: 'Flex/ Grid',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		backgroundImage: '/assets/space/SpaceCity6.jpeg',
	},
	{
		id: 4,
		icon: RxPencil2,
		title: 'Methology BEM',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		backgroundImage: '/assets/space/SpaceCity7.jpeg',
	},
	{
		id: 5,
		icon: RxRocket,
		title: 'MaterialUi / TailwindCss',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		backgroundImage: '/assets/space/SpaceCity8.jpeg',
	},
	{
		id: 6,
		icon: RxAccessibility,
		title: 'JavaScript',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		backgroundImage: '/assets/space/SpaceCity9.jpeg',
	},
	{
		id: 7,
		icon: RxCrop,
		title: 'TypeScript + React',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		backgroundImage: '/assets/space/SpaceCity1.jpg',
	},
	{
		id: 8,
		icon: RxDesktop,
		title: 'GitHub / Storybook',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		backgroundImage: '/assets/space/SpaceCity5.jpeg',
	},
	{
		id: 9,
		icon: RxPencil2,
		title: 'Test driving development (Unit Tests)',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		backgroundImage: '/assets/space/SpaceCity6.jpeg',
	},
]

export const ExperienceData = [
	{
		id: 1,
		period: '2022 - Mar 2024',
		title: 'Working Student',
		description:
			'Maintenance of the educational platforms in GitHub and SAP SharePoint, creation and editing of content using HTML5, CSS3, Javascript & Markdown. Editing of videos, moderation of training sessions. Creating scripts using JavaScript. Analysis of information for further use with SAP Logon.',
		technologies: [
			{
				id: 1,
				name: 'HTML',
			},
			{
				id: 2,
				name: 'CSS',
			},
			{
				id: 3,
				name: 'JavaScript',
			},
			{
				id: 4,
				name: 'jQuery',
			},
			{
				id: 5,
				name: 'MkDocs',
			},
			{
				id: 6,
				name: 'Markdown',
			},
			{
				id: 7,
				name: 'GitHub',
			},
			{
				id: 8,
				name: 'SharePoint',
			},
			{
				id: 9,
				name: 'SAP Wiki',
			},
			{
				id: 10,
				name: 'Jira',
			},
			{
				id: 11,
				name: 'Ms Teams',
			},
			{
				id: 12,
				name: 'SAP Logon',
			},
		],
	},
]
