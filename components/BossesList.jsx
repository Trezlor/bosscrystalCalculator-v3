import BossInformation from './BossInformation';

const charactersPerBossLocalStorageKey = 'charactersPerBoss';

const readCharactersPerBoss = () /* :Record<string, number> */ => {
	const savedString = localStorage.getItem(charactersPerBossLocalStorageKey, newCharactersPerBoss);
	if (savedString) {
		try {
			return JSON.parse(savedString);
		} catch (e) {
			console.error(e);
			return {};
		}
	}
	return {};
};

const bossesList = ({ bosses }) => {
	const [charactersPerBoss, setCharactersPerBoss] = useState(readCharactersPerBoss()); // Record<string, number>

	const changeCharactersForBoss = (boss, newCharacterAmount) => {
		const newCharactersPerBoss = {
			...charactersPerBoss,
			[boss.id]: newCharacterAmount,
		};
		setCharactersPerBoss(newCharactersPerBoss);
		localStorage.setItem(charactersPerBossLocalStorageKey, JSON.stringify(newCharactersPerBoss));
	};

	return (
		<ul>
			{bosses.map((boss) => (
				<BossInformation
					key={boss.id}
					boss={boss}
					characters={charactersPerBoss[boss.id] ?? 0}
					changeCharactersForBoss={changeCharactersForBoss}
				/>
			))}
		</ul>
	);
};

export default bossesList;
