import BossInformation from './BossInformation';

const bossesList = ({ bosses }) => {
	const [charactersPerBoss, setCharactersPerBoss] = useState({}); // Record<string, number>

	const changeCharactersForBoss = (boss, newCharacterAmount) => {
		setCharactersPerBoss({
			...charactersPerBoss,
			[boss]: newCharacterAmount,
		});
	};

	return (
		<ul>
			{bosses.map((boss) => (
				<BossInformation
					key={boss.id}
					boss={boss}
					characters={charactersPerBoss[boss.id]}
					changeCharactersForBoss={changeCharactersForBoss}
				/>
			))}
		</ul>
	);
};

export default bossesList;
