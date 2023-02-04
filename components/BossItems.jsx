import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Bosses.module.css';

const BossItems = ({ boss }) => {
	const [players, setPlayers] = useState(0);
	const [characters, setCharacters] = useState(0);

	return (
		<>
			<li className={styles.list + ' ' + styles[boss.order] + ' ' + styles[boss.difficulty.toLowerCase()]}>
				<Image
					alt='boss image'
					src={`/images/${boss.name.replace(/\s+/g, '_').toLocaleLowerCase()}.png`}
					width='64'
					height='65'
				/>

				<div className={styles.border + ' ' + boss.difficulty.toLocaleLowerCase()}>
					<p>{boss.difficulty.toLocaleUpperCase()}</p>
				</div>

				<div className={styles.border + ' ' + styles.name}>
					<p>{boss.name}</p>
				</div>

				<div className={styles.border}>
					<p>{boss.mesos.toLocaleString()}</p>
				</div>

				<div className={styles.border + ' ' + styles.players}>
					<button
						className={styles[boss.difficulty.toLocaleLowerCase() + '_btn']}
						onClick={() => {
							players <= 0 ? '' : setPlayers(players - 1);
						}}
					>
						-
					</button>
					<p>{players}</p>
					<button
						className={styles[boss.difficulty.toLocaleLowerCase() + '_btn']}
						onClick={() => setPlayers(players + 1)}
						id={boss.name + boss.difficulty}
					>
						+
					</button>
				</div>

				<div className={styles.border + ' ' + styles.characters}>
					<button
						className={styles[boss.difficulty.toLocaleLowerCase() + '_btn']}
						onClick={() => {
							characters <= 0 ? '' : setCharacters(characters - 1);
						}}
					>
						-
					</button>
					<p>{characters}</p>
					<button
						className={styles[boss.difficulty.toLocaleLowerCase() + '_btn']}
						onClick={() => setCharacters(characters + 1)}
					>
						+
					</button>
				</div>
			</li>
		</>
	);
};

export default BossItems;
