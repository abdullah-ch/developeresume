import { v4 as uuidv4 } from 'uuid';
import { IData } from '@/types';

const userData: IData = {
	header: {
		name: 'Ash Faisal',
		phoneNumber: '+1 (631) 633-4418',
		// location: 'Berlin, Germany',
		// website: "abdullahch.dev",
		email: 'anushafaisal340@gmail.com',
		linkedIn: 'linkedin.com/in/anusha-faisal/',
		// github: 'github.com/abdullah-ch'
	},
	education: [
		{
			id: uuidv4(),
			degree: 'B.Sc. of Computer Sciences',
			university: `St. Joseph's University New York`,
			location: 'New York, USA',
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
				'REST APIs',
				'Python'
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
			designation: 'Software Engineer L3 via Turing.com',
			company: 'Meta',
			companyLink: "meta.com/",
			location: 'USA | Remote',
			duration: 'Mar 2023 - Present',
			tasks: [
				`Engineered RESTful APIs for a FinTech application to onboard individual and company customers with third-party banking partners, utilizing NestJS and MongoDB for secure and seamless data exchange, reducing onboarding time by <strong>40%</strong> and increasing completion rates by <strong>30%</strong>.`,
				`Intergrated <strong>Know Your Customer</strong> (KYC) and <strong>Customer Due Diligence</strong> (CDD) services, helping global banking clients meet strict regulatory standards using Nest Js, GraphQL and MongoDB.`,
				`Developed and implemented unit tests using Jest in Nest Js, achieving over <strong>90%</strong> test coverage for new features, significantly reducing production bugs, and enhancing application stability.`, `Engineered and optimized frontend components for banking application onboarding using Next.js, integrating GraphQL, Redux Toolkit, and React Hook Form. Applied Factory and Decorator design patterns to streamline data management and enhance code readibility and maintainability.`,
				`Containerized microservices using Docker to streamline development workows, enabling consistent environments across development, staging, and production. Reduced deployment time by <strong>50%</strong> and improved overall system scalability`
			]
		},
		{
			id: uuidv4(),
			designation: 'Software Engineer L3',
			company: 'Turing',
			companyLink: "turing.com",
			location: 'Palo Alto, California /On-site',
			duration: 'Jan 2022 - Mar 2023',
			tasks: [
				`Engineered Turing's Labelling Tool Feature by developing dynamic forms using Formik in React with Redux Toolkit, significantly enhancing the car buying and selling process, that led to a contribution towards <strong>$1 M</strong> monthly revenue.`,
				`Engineered the Internal code review tool using Firebase, significantly enhancing the user experience for over <strong>100,000 users</strong> on the Turing platform.`,
				`Implemented Call Quality Control (QC) feature using custom hooks and factory, decorator patterns in React, for supervising HR team, leading to a <strong>20%</strong> increase in the closing rate of sales leads by enhancing the quality and consistency of customer interactions.`,
				`Elevated code quality and maintainability by refactoring component code to TypeScript, improving <strong>50% </strong> of the codebase and reducing bugs significantly.`
			]
		},
		{
			id: uuidv4(),
			designation: 'Software Engineer L2',
			company: 'Tkxel',
			companyLink: "tkxel.com",
			location: 'Reston, VA | On-site',
			duration: 'Sept 2019 - Jan 2022',
			tasks: [
				`Optimized Webapp's bundle size by <strong>15%</strong> through lazy loading, CSS purging, and migration to lightweight libraries in Vue js, resulting in a faster loading time and enhanced user experience.`,
				`Implemented <strong>Refresh Token Rotation</strong> based Authentication in Node.js to enhance API security, significantly reducing the risk of data breaches and strengthening data confidentiality.`
				,
				`Developed a scalable WebSocket server with Node.js and the WS library, integrated with RabbitMQ for <strong>Streaming real-time tickers'</strong> information and notifications. Monitored client heartbeat and efficiently <strong>pruned idle connections</strong> to conserve resources.`,
				`Designed reusable UI components in Vue.js with the <strong>Decorator Pattern</strong>, improving code maintainability and development efficiency across multiple projects.`,
				`Implemented a highly available, scalable Docker-based microservices architecture that improved application performance by <strong>25%</strong>. Successfully migrated 20+ services to Kubernetes.`
			]
		},
	],
	projects: [
		{
			id: uuidv4(),
			name: `Refresh Token Rotation`,
			desc: `Implemented <strong>Refresh Token Rotation Authentication System</strong> with <strong>Hacker Detection</strong> for improved security and lower risk of token leakage using <strong>Express, Mongodb, and Node.</strong> Enabled <strong>Automatic Retry Mechanism</strong> for Failed APIs with Stale Access Tokens, enhancing the user experience using React JS.`,
		},
		{
			id: uuidv4(),
			name: `Websockets Authentication Server`,
			desc: `Created a secure and efficient <strong>Authenticated WebSocket Server</strong> built in <strong>Node.js</strong> with the <strong>ws library</strong>. Features include exclusive authenticated connections, proactive ping messages to prevent inactivity termination, and smart heartbeat monitoring.`,
		},
		{
			id: uuidv4(),
			name: `Anime Tracker Web App`,
			desc: `Developed a responsive web app for browsing, searching, and discovering anime titles, featuring a clean UI with daily updates, top-rated lists, and upcoming releases. Leveraged React, Redux, and RESTful APIs to implement <strong>advanced search, genre browsing, and seasonal catalogs</strong>.`
			,
		},
	],
	accomplishments: [
		`Ranked among the top 10 percent of software engineers, earning over 210+ upvotes on Stackoverflow. Contributions through questions and answers have positively impacted more than <strong>6 million</strong> software engineers worldwide.`,
	]
};

export default userData;
