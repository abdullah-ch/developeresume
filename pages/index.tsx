import {
	Header,
	Education,
	Skills,
	Experience,
	Projects,
	Accomplishments
} from '@/components';
import Head from 'next/head';
import data from '@/data';

export default function Home() {
	const title = `resume-${data.header.name
		.toLowerCase()
		.split(' ')
		.join('-')}`;

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<div className="bg-white min-h-screen text-black space-y-3 font-light">
				<Header />
				{/* Summary section styled like Education */}
				{data.summary && (
					<div>
						<h2 className="font-semibold text-lg uppercase border-b border-gray-400 mb-2">
							Summary
						</h2>
						<div className="font-light">
							<p className="mt-2">{data.summary}</p>
						</div>
					</div>
				)}
				{data.education.length ? <Education /> : null}
				{data.experience.length ? <Experience /> : null}
				{data.projects.length ? <Projects /> : null}
				{data.skills.length ? <Skills /> : null}
				{data.accomplishments.length ? <Accomplishments /> : null}
			</div>
		</>
	);
}
