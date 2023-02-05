import BossInformation from './BossInformation';

const bossesList = ({ bosses }) => {
	return (
		<ul>
			{bosses.map((boss) => (
				<BossInformation
					key={boss.id}
					boss={boss}
				/>
			))}
		</ul>
	);
};

export default bossesList;
