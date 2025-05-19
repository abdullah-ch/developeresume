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
			skill: ['JavaScript', 'TypeScript', 'Python']
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
				'LangChain',
				'LangGraph'
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
			duration: 'Mar 2023 - Present',
			tasks: [
				`Led backend engineering for a FinTech platform using <strong>Python</strong>, <strong>NestJS</strong>, and <strong>MongoDB</strong> to build production-grade APIs for customer onboarding, reducing KYC processing time by <strong>40%</strong>.`,
				`Integrated <strong>Large Language Models</strong> for document parsing and automated compliance validation in KYC/CDD workflows, streamlining onboarding for global banking clients.`,
				`Designed and deployed containerized microservices using <strong>Docker</strong> and orchestrated with <strong>Kubernetes</strong>, ensuring scalability and consistent environments across dev/stage/prod.`,
				`Built test-driven Python modules for API orchestration and data processing pipelines, achieving <strong>90%+ test coverage</strong> and improving system reliability.`,
				`Collaborated on integrating <strong>GraphQL</strong> APIs and <strong>LangChain</strong>-based agents to enhance internal tooling with AI-powered decision trees.`
			]
		},
		{
			id: uuidv4(),
			designation: 'Software Engineer II',
			company: 'Dubizzle',
			companyLink: "dubizzle.com",
			location: 'Dubai, UAE',
			duration: 'Jan 2022 - Mar 2023',
			tasks: [
				`Developed high-impact backend and frontend modules using <strong>Python</strong> and <strong>GraphQL</strong> for user-facing features that generated over <strong>$1M/month</strong> in revenue.`,
				`Integrated Firebase with real-time communication features, and used <strong>LangChain</strong> to power conversational interfaces for internal car service tools, benefiting over <strong>100,000 users</strong>.`,
				`Refactored legacy frontend logic to align with Python-based backend services and orchestrated stateful workflows using <strong>LangGraph</strong>.`,
				`Built reusable orchestration flows for model-based decision-making pipelines using Python and LangChain, enhancing agent reliability and modularity.`
			]
		},
		{
			id: uuidv4(),
			designation: 'Full Stack Software Engineer',
			company: 'Trade Hat',
			companyLink: "app.tradehat.com",
			location: 'USA | Remote',
			duration: 'Sept 2019 - Jan 2022',
			tasks: [
				`Built scalable microservices and backend pipelines in <strong>Python</strong>, integrating <strong>RabbitMQ</strong> and <strong>WebSocket</strong> protocols for real-time trading tickers.`,
				`Integrated <strong>LangChain</strong> pipelines for document summarization and contextual alerting, supporting both streaming and stored data sources.`,
				`Improved performance of LLM-powered endpoints using Python-based orchestration layers, reducing latency and increasing API reliability.`,
				`Containerized backend workflows with Docker and deployed 20+ services to <strong>Kubernetes</strong>, streamlining LLM-agent based microservices.`,
				`Implemented advanced agent routing and error-handling flows using <strong>LangGraph</strong>, increasing system resiliency under high throughput conditions.`
			]
		}
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
