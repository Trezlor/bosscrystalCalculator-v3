import styles from '../styles/Bosses.module.css';
import BossItems from './bossItems';

const bossItem = ({ bosses }) => {
	return (
		<ul className={styles.ul}>
			{bosses.map((boss, key) => (
				<BossItems
					key={boss.id}
					boss={boss}
				/>
			))}
		</ul>
	);
};

export default bossItem;
