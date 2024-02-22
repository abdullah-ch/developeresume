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
				`Designed and developed headless reusable components in React JS and Next JS, enhancing code maintainability and flexibility through the implementation of <strong>Design patterns.</strong>`,
				`Elevated code quality and maintainability by refactoring component code, converting to TypeScript, and implementing static type checking.`,
				`Engineered the Car Auction Negotiation Feature using Firebase, contributing to Dubizzle Car Service's monthly revenue surpassing <strong>$1 Million</strong>.`,
				`Collaborated with cross-functional teams, translating stakeholder requirements into actionable development plans for successful project outcomes.`,
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
				`Optimized Webapp's bundle size by <strong>15%</strong> through lazy loading, CSS purging, and migration to lightweight libraries, resulting in a faster loading time and enhanced user experience.`,
				`Implemented <strong>Refresh Token Rotation based Authentication</strong> for enhanced API security in Node JS, demonstrating commitment to data confidentiality and reducing the risk of data breaches.`,
				`Developed a scalable WebSocket server with Node.js and the WS library, integrated with RabbitMQ for <strong>Streaming real-time tickers'</strong> information and notifications. Monitored client heartbeat and efficiently <strong>pruned idle connections</strong> to conserve resources.`,
				`Designed reusable UI components in Vue.js with the <strong>Decorator Pattern</strong>, improving code maintainability and development efficiency across multiple projects.`,
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
				`Built reusable React components with decoupled logic and UI layers using Hooks, enhancing code maintainability and development efficiency.`,
				`Contributed to React-based POS and website front-end development using <strong>TypeScript and Material UI</strong>, delivering high-quality, responsive interfaces through collaboration with cross-functional teams.`,
				`Created efficient and scalable RESTful APIs to support seamless communication between systems, ensuring productivity and minimizing downtime.`,
			]
		},
	],
	
	projects: [
		{
			id: uuidv4(),
			name: `<a href="https://github.com/abdullah-ch/websockets-authentication-server">Refresh Token Rotation</a>`,
			desc: `Implemented <strong>Refresh Token Rotation Authentication System</strong> with <strong>Hacker Detection</strong> for improved security and lower risk of token leakage using <strong>Express, Mongodb, and Node.</strong> Enabled <strong>Automatic Retry Mechanism</strong> for Failed APIs with Stale Access Tokens, enhancing the user experience using React JS.`,
		},
		{
			id: uuidv4(),
			name: `<a href="https://github.com/abdullah-ch/websockets-authentication-server">Websockets Authentication Server</a>`,
			desc: `Created a secure and efficient <strong>Authenticated WebSocket Server</strong> built in <strong>Node.js</strong> with the <strong>ws library</strong>. Features include exclusive authenticated connections, proactive ping messages to prevent inactivity termination, and smart heartbeat monitoring.`,
		},
		{
			id: uuidv4(),
			name: `<a href="https://github.com/abdullah-ch/Anime-Tracker-Web-App">Anime Tracker Web App</a>`,
			desc: `Designed and developed a responsive web application that allows users to <strong>browse, search, and discover anime titles.</strong> The app features a clean user interface and intuitive navigation and includes daily release updates, top-rated titles, and upcoming releases. Leveraging <strong>React, Redux, and RESTful APIs.</strong> Implemented features such as <strong>advanced search functionality, browsing by genre, and seasonal anime catalogs.</strong>`,
		},
	],
	accomplishments : [
		`Ranked among the top 10 percent of software engineers, earning over 174 upvotes on <a href="https://stackoverflow.com/users/13708712/abdullah-ch">Stackoverflow</a>. Contributions through questions and answers have positively impacted more than 5.8 million software engineers worldwide.`,
		`Selected as one of 40 Fellows from a pool of 2,000+ applicants for the inaugural <a href="https://www.linkedin.com/company/ventureforpakistan/">Venture For Pakistan</a> Fellows S21 Cohort.`,
		`Established a notable presence on <a href="https://github.com/abdullah-ch">GitHub</a> with diverse JavaScript technology contributions, collectively amassing over 100 stars for my projects.`,
		`Pioneered as the first Microsoft Ambassador from ITU, delivering over 10 talks on Git, GitHub, and the Hacktoberfest Challenge.`
	]
};

export default userData;
