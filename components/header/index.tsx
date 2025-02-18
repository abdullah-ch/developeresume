import data from '@/data';
import IF from '../Common/IF';

const Header = () => {
	const { header } = data;

	const transformURLtoHTTPs = (url: string) => {
		const httpsRegex = /^https:\/\//i;

		const urlObj = {
			urlWithHttps: '',
			urlWithOutHttps: ''
		};

		if (httpsRegex.test(url)) {
			urlObj.urlWithHttps = url;

			const urlArr = url.split('');
			urlObj.urlWithOutHttps = urlArr.splice(8, urlArr.length).join('');

			return urlObj;
		}

		urlObj.urlWithHttps = `https://${url}`;
		urlObj.urlWithOutHttps = url;

		return urlObj;
	};

	const linkedIn = transformURLtoHTTPs(header.linkedIn);
	const gitHub = transformURLtoHTTPs(header.github);
	const website = transformURLtoHTTPs(header?.website || '');

	return (
		<div className="flex flex-col items-center space-y-1">
			<h1 className="font-semibold text-4xl">{header.name}</h1>
			<div className="space-x-2 font-light">
				<span>
					<a href={`tel:${header.phoneNumber}`}>
						{header.phoneNumber}
					</a>
				</span>

				<IF condition={!!header.location}>
					<span>|</span>
					<span>{header.location}</span>
				</IF>
				<IF condition={!!header.website}>
					<span>|</span>
					<span className="text-blue-500">
						<a href={website.urlWithHttps}>
							{website.urlWithOutHttps}
						</a>
					</span>
				</IF>
			</div>
			<div className="space-x-2 font-light">
				<span className="text-blue-500">
					<a href={`mailto:${header.email}`}>{header.email}</a>
				</span>
				<span>|</span>
				<span className="text-blue-500">
					<a href={linkedIn.urlWithHttps}>
						{linkedIn.urlWithOutHttps}
					</a>
				</span>
				<IF condition={!!header.github}>
				<span>|</span>
				<span className="text-blue-500">
					<a href={gitHub.urlWithHttps}>{gitHub.urlWithOutHttps}</a>
				</span>
				</IF>
			</div>
		</div>
	);
};

export default Header;
