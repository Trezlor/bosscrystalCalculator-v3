import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Bosses.module.css';

const BossInformation = ({ boss }) => {
	const [players, setPlayers] = useState(0);
	const [characters, setCharacters] = useState(0);

	return (
		<>
			<li className={styles.boss_list_item + ' ' + styles[boss.order] + ' ' + styles[boss.difficulty.toLowerCase()]}>
				<Image
					alt='boss image'
					src={`/images/${boss.name.replace(/\s+/g, '_').toLocaleLowerCase()}.png`}
					width='64'
					height='65'
				/>

				<div className={styles.grid_cell + ' ' + boss.difficulty.toLocaleLowerCase()}>
					<p>{boss.difficulty.toLocaleUpperCase()}</p>
				</div>

				<div className={styles.grid_cell + ' ' + styles.name}>
					<p>{boss.name}</p>
				</div>

				<div className={styles.grid_cell + ' ' + styles.mesos}>
					<p>{boss.mesos.toLocaleString()}</p>
				</div>

				<div className={styles.grid_cell}>
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

				<div className={styles.grid_cell + ' ' + styles.characters}>
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

export default BossInformation;
