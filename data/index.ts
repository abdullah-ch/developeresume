import { v4 as uuidv4 } from 'uuid';
import { IData } from '@/types';

const userData: IData = {
	header: {
		name: 'Abdullah Ch',
		phoneNumber: '+923124108473',
		// location: 'Berlin, Germany',
		website: "abdullahch.dev",
		email: 'shogun.1072000@gmail.com',
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
				'NestJS',
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
			designation: 'Senior Software Engineer',
			company: 'Rana Dev',
			companyLink: "ranadev.io/",
			location: 'USA | Remote',
			duration: 'Mar 2024 - Present',
			tasks: [
				`Engineered Multiple Onboarding Journies for Banking Partners for a FinTech Application by creating complex and dynamic forms using React-Hook forms in NextJS, reducing the onboarding time by <strong>10%</strong>.`,
				`Developed and implemented unit tests using Jest in NextJs, achieving over <strong>90%</strong> test coverage for new features, significantly reducing production bugs, and enhancing application stability.`, `Engineered and optimized frontend components using NextJS, integrating GraphQL, Redux Toolkit, and React Hook Form. Applied Factory and Decorator design patterns to streamline data management and enhance code readibility and maintainability.`,
				`Mentored junior developers on best practices for code quality, performance optimization, and debugging, resulting in a <strong>20%</strong> increase in the team's overall productivity and code quality.`
			]
		},
		{
			id: uuidv4(),
			designation: 'Software Engineer II',
			company: 'Dubizzle',
			companyLink: "dubizzle.com",
			location: 'Dubai, UAE',
			duration: 'Jan 2023 - Mar 2024',
			tasks: [
				`Engineered <a href = "https://www.dubizzle.com/cars/services/sell-my-car">Dubizzle's Car Ad Post Feature</a> by developing dynamic forms using Formik in React with Redux Toolkit, significantly enhancing the car buying and selling process, that led to a contribution towards <strong>$1 M</strong> monthly revenue.`,
				`Engineered the Car Auction Negotiation Feature using Firebase, significantly enhancing the user experience for over <strong>100,000 users</strong> on the Dubizzle Car Service platform.`,
				`Implemented Call Quality Control (QC) feature using custom hooks and factory, decorator patterns in React, for supervising Dubizzle Cars field agents, leading to a <strong>20%</strong> increase in the closing rate of sales leads by enhancing the quality and consistency of customer interactions.`,
				`Elevated code quality and maintainability by refactoring component code to TypeScript, improving <strong>50% </strong> of the codebase and reducing bugs significantly.`
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
				`Optimized Webapp's bundle size by <strong>15%</strong> through lazy loading, CSS purging, and migration to lightweight libraries in Vue js, resulting in a faster loading time and enhanced user experience.`,
				`Implemented <strong>Refresh Token Rotation</strong> based Authentication in Node.js to enhance API security, significantly reducing the risk of data breaches and strengthening data confidentiality.`
				,
				`Developed a scalable WebSocket server with Node.js and the WS library, integrated with RabbitMQ for <strong>Streaming real-time tickers'</strong> information and notifications. Monitored client heartbeat and efficiently <strong>pruned idle connections</strong> to conserve resources.`,
				`Designed reusable UI components in Vue.js with the <strong>Decorator Pattern</strong>, improving code maintainability and development efficiency across multiple projects.`,
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
			desc: `Developed a responsive web app for browsing, searching, and discovering anime titles, featuring a clean UI with daily updates, top-rated lists, and upcoming releases. Leveraged React, Redux, and RESTful APIs to implement <strong>advanced search, genre browsing, and seasonal catalogs</strong>.`
			,
		},
	],
	accomplishments: [
		`Ranked among the top 10 percent of software engineers, earning over 210+ upvotes on <a href="https://stackoverflow.com/users/13708712/abdullah-ch">Stackoverflow</a>. Contributions through questions and answers have positively impacted more than <strong>6 million</strong> software engineers worldwide.`,
		`Established a notable presence on <a href="https://github.com/abdullah-ch">GitHub</a> with diverse JavaScript technology contributions, collectively amassing over 100 stars for my projects.`,
	]
};

export default userData;
