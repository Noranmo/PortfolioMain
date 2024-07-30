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
} from 'react-icons/rx'

import project01Big from '../public/assets/projects/MrFox.png'

import project02Big from '../public/assets/projects/PortfolioMain.png'

import project03Big from '../public/assets/projects/Portfoliov2.png'

import project04Big from '../public/assets/projects/TodoList.png'

export const Socials = [
	{
		id: 'LinkedIn',
		name: 'LinkedIn',
		src: '/assets/icons/linkedIn.svg',
		link: 'https://www.linkedin.com/in/andrii-tynnyi-a6612021b/',
	},
	{
		id: 'GitHub',
		name: 'GitHub',
		src: '/assets/icons/gitHub.svg',
		link: 'https://github.com/Noranmo?tab=repositories',
	},
	{
		id: 'Instagram',
		name: 'Instagram',
		src: '/assets/instagram.svg',
		link: 'https://www.instagram.com/tynnyi_andrii/',
	},
]

export const NavLinks = [
	{
		name: 'Home',
		icon: RxHome,
		link: '/',
	},
	{
		name: 'Skills',
		icon: RxPerson,
		link: '/my-skills',
	},
	{
		name: 'Projects',
		icon: RxDashboard,
		link: '/my-projects',
	},
	// {
	// 	name: 'Project',
	// 	icon: RxDashboard,
	// 	link: '/project-page',
	// },
	{
		name: 'Contact',
		icon: RxPencil2,
		link: '/my-contacts',
	},
]

export const ProImages = [
	{
		id: 0,
		src: '/assets/projects/MrFox.png',
		bigImage: project01Big,
		title: 'MrFox web-shop',
		skills: 'HTML, CSS, SCSS, JS, EJS, Node.js, Express.js',
		githubLink: 'https://github.com/Noranmo/MrFox',
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
		src: '/assets/projects/Orange1.jpeg',
		title: 'Project 5',
		skills: 'HTML, CSS, JS',
		githubLink: 'https://github.com',
	},
	{
		id: 5,
		src: '/assets/projects/Orange2.jpeg',
		title: 'Project 6',
		skills: 'HTML, CSS, JS',
		githubLink: 'https://github.com',
	},
	{
		id: 6,
		src: '/assets/projects/Orange3.jpeg',
		title: 'Project 7',
		skills: 'HTML, CSS, JS',
		githubLink: 'https://github.com',
	},
	{
		id: 7,
		src: '/assets/projects/Orange4.jpeg',
		title: 'Project 8',
		skills: 'HTML, CSS, JS',
		githubLink: 'https://github.com',
	},
]

export const ServiceData = [
	{
		icon: RxReader,
		title: 'HTML5 + CSS3',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		backgroundImage: '/assets/space/SpaceCity1.jpg',
	},
	{
		icon: RxCrop,
		title: 'SASS/ SCSS',
		content: 'Lorem ipsum dolor sit /amet, consectetur adipiscing elit.',
		backgroundImage: '/assets/space/SpaceCity5.jpeg',
	},
	{
		icon: RxDesktop,
		title: 'Flex/ Grid',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		backgroundImage: '/assets/space/SpaceCity6.jpeg',
	},
	{
		icon: RxPencil2,
		title: 'Methology BEM',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		backgroundImage: '/assets/space/SpaceCity7.jpeg',
	},
	{
		icon: RxRocket,
		title: 'MaterialUi / TailwindCss',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		backgroundImage: '/assets/space/SpaceCity8.jpeg',
	},
	{
		icon: RxAccessibility,
		title: 'JavaScript',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		backgroundImage: '/assets/space/SpaceCity9.jpeg',
	},
	{
		icon: RxCrop,
		title: 'TypeScript + React',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		backgroundImage: '/assets/space/SpaceCity1.jpg',
	},
	{
		icon: RxDesktop,
		title: 'GitHub / Storybook',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		backgroundImage: '/assets/space/SpaceCity5.jpeg',
	},
	{
		icon: RxPencil2,
		title: 'Test driving development (Unit Tests)',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		backgroundImage: '/assets/space/SpaceCity6.jpeg',
	},
]
