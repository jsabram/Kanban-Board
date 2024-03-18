import './Badge.scss';

interface BadgeProps {
	className: string;
	badgeText: string;
}

const Badge: React.FC<BadgeProps> = ({ className, badgeText }) => {
	return (
		<div className={`badge badge--${className}`}>
			<p>{badgeText}</p>
		</div>
	);
};

export default Badge;
