import { v4 as uuidv4 } from 'uuid';
import { IData } from '@/types';

const userData: IData = {
	header: {
		name: 'Abdullah Ch',
		phoneNumber: '+923124108473',
		// location: 'Berlin, Germany',
		website: "abdullahch.dev",
		email: 'abdullahchaudharry@gmail.com',
		linkedIn: 'linkedin.com/in/abdullah-ch/',
		github: 'github.com/abdullah-ch'
	},
	education: [
		{
			id: uuidv4(),
			degree: 'B.Sc. of Computer Sciences',
			university: 'Information Technology University',
			location: 'Lahore, Pakistan',
			// duration: 'Oct 2018 - May 2022'
		}
	],
	skills: [
		{
			id: uuidv4(),
			name: 'Programming languages',
			skill: ['JavaScript', 'TypeScript']
		},
		{
			id: uuidv4(),
			name: 'Technologies',
			skill: [
				'Git',
				'HTML',
				'CSS',
				'React',
				'Next.js',
				'Express.js',
				'Redux Toolkit',
				'Tailwind CSS',
				'Styled Components',
				'MongoDB',
				'Node.js',
				'REST APIs'
			]
		},
		{
			id: uuidv4(),
			name: 'Soft Skills',
			skill: ['Ownership', 'Rigor', 'Team work', 'Communication']
		}
	],
	experience: [
		{
			id: uuidv4(),
			designation: 'Software Engineer',
			company: 'Dubizzle',
			companyLink: "dubizzle.com",
			location: 'Dubai, UAE',
			duration: 'Jan 2023 - Present',
			tasks: [
				`Designed and developed headless reusable components, decoupling the UI and the logic layers for better code
				maintainability and flexibility using design patterns in React JS and Next JS.`,
				`Improved code quality and maintainability by conducting component code refactoring and converting
				to TypeScript, reducing errors through static type checking.`,
				`Built Car Auction Negotiation Feature using Firebase that helped the Dubizzle Car Service to generate more than <strong>1 Million Dollars per Month.</<strong>`,
				`Collaborated with cross-functional teams to develop effective software solutions, utilizing
				communication and problem-solving skills. Translated stakeholder requirements into actionable
				development plans for successful project outcomes.`,
			
			]
		},
		{
			id: uuidv4(),
			designation: 'Full Stack Software Engineer (MERN/MEVN)',
			company: 'Trade Hat',
			companyLink: "app.tradehat.com",
			location: 'USA | Remote',
			duration: 'Sept 2021 - Jan 2023',
			tasks: [
				`Optimized Webapp's bundle size by <strong>15%</strong> through lazy loading, purging CSS, and migrating to lightweight libraries.
				The faster loading time led to a better user experience.`,
				`Improved API security by implementing <strong>Refresh Token Rotation based Authentication</strong> with unique refresh tokens
				for each session using Node JS. Designed and implemented the mechanism, conducted thorough testing, and
				reduced the risk of data breaches. Demonstrated ability to implement innovative security solutions and
				commitment to data confidentiality.`,
				`Designed and built a scalable WebSocket server with Node.js and the WS library, integrated with RabbitMQ for
				<strong>Streaming real-time tickers'</strong> information and notifications to the clients. Monitered the heartbeat of the clients and <strong>pruned idle clients' connections from consuming unnecessary resources</strong>`,
				`Created reusable UI components in Vue.js with the <strong>Decorator Pattern</strong>, improving code maintainability and saving
				development time. Deployed these components across multiple projects, reducing bugs and streamlining
				development.`
			]
		},
		{
			id: uuidv4(),
			designation: 'Full Stack Software Engineer (MERN)',
			company: 'BigOSoft',
			companyLink: 'bigosoft.us/',
			location: 'USA | Remote',
			duration: 'May 2021 - Sep 2021',
			tasks: [
				`Built reusable React components with decoupled logic and UI layers using Hooks, improving code
				maintainability and development efficiency.`,
				`Contributed to React-based POS and website front-end development using <strong>TypeScript and Material UI</strong>,
				delivering high-quality, responsive interfaces through collaboration with cross-functional teams.`,
				`Created efficient and scalable RESTful APIs to support seamless communication between systems, ensuring
				productivity and minimizing downtime.`,
			
			]
		},
	],
	projects: [
		{
			id: uuidv4(),
			name: `<a href="https://github.com/abdullah-ch/websockets-authentication-server">Refresh Token Rotation</a>`,
			desc: `Implemented <strong>Refresh Token Rotation Authentication System</strong> with <strong>Hacker Detection</strong> for improved
			security and lower risk of token leakage using <strong>Express, Mongodb and Node.</strong> Enabled <strong>Automatic Retry Mechanism</strong> for Failed APIs with Stale Access Tokens, enhancing the user
			experience using React JS.`
		},
		{
			id: uuidv4(),
			name: `<a href="https://github.com/abdullah-ch/websockets-authentication-server">Websockets Authentication Server</a>`,
			desc: `Created a secure and efficient <strong>Authenticated WebSocket Server</strong> built in <strong>Node.js</strong> with the <strong>ws library</strong>. Features include exclusive authenticated connections, proactive ping messages to prevent inactivity termination, and smart heartbeat monitoring.`
	},	
		{
			id: uuidv4(),
			name: `<a href="https://github.com/abdullah-ch/Anime-Tracker-Web-App">Anime Tracker Web App</a>`,
			desc: `Designed and developed a responsive web application that allows users to <strong>browse, search, and
			discover anime titles.</strong> The app features a clean user interface and intuitive navigation, and
			includes daily release updates, top-rated titles, and upcoming releases. Leveraging <strong>React, Redux,
			and RESTful APIs.</strong> Implemented features such as <strong>advanced search functionality, browsing by genre, and seasonal anime
			catalogs.</strong>`
		},
	],
	accomplishments: [
		`I am one of the top <strong>10 percent</strong> software engineers with more than <strong>174 upvotes</strong> on <a href="https://stackoverflow.com/users/13708712/abdullah-ch">Stackoverflow</a>. My Questions and Answers have impacted more than <strong>5.8 million</strong> software engineers all around the world.`,
		`Selected as 1 of 40 Fellows out of a pool of 2k+ applicants for the inaugural <a href="https://www.linkedin.com/company/ventureforpakistan/">Venture For Pakistan</a> Fellows S21 Cohort.`,
		`I contribute on <a href="https://github.com/abdullah-ch">Github</a> with different JavaScript Technologies. My projects have gained more than a 100 stars collectively.`,
		`Participating in Hactoberfest challenge since 2018.`
	]
};

export default userData;
