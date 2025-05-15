export interface IData {
	summary: string;
	header: {
		name: string;
		phoneNumber: string;
		location?: string;
		email: string;
		linkedIn: string;
		github: string;
		website?: string
	};
	education: {
		id: string;
		degree: string;
		university: string;
		location: string;
		duration?: string;
	}[];
	skills: {
		id: string;
		name: string;
		skill: string[];
	}[];
	experience: {
		id: string;
		designation: string;
		company: string;
		location: string;
		duration: string;
		companyLink?: string;
		tasks: string[];
	}[];
	projects: {
		id: string;
		name: string;
		desc: string;
	}[];
	accomplishments: string[];
}
