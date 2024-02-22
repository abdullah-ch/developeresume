import { IFProps } from './IF.types';

const IF: React.FC<IFProps> = props => {
	const { children, condition } = props;
	return condition ? <>{children}</> : <></>;
};

export default IF;
