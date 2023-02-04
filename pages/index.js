import Head from 'next/head';
import { useState } from 'react';
import BossList from '../components/BossList';
import bosses from '../json/data';
import styles from '../styles/Home.module.css';

export default function Home() {
	let [showHide, setShowHide] = useState('Hide');

	return (
		<>
			<Head>
				<title>Maplestory - Boss crystal calculator</title>
			</Head>
			<header>
				<div className={styles.info_container + ' ' + styles[showHide]}>
					<h1>Boss Crystal Calculator</h1>
					<h3>Players:</h3>
					<p>How many players you have in your party. Crystal value will be adjusted accordingly.</p>
					<h3>Characters:</h3>
					<p>How many characters you have that can beat a specific boss.</p>
					<h3>Result:</h3>
					<p>Below on the page you&apos;ll have a compiled list of the most profitable crystals to sell.</p>
					<small
						onClick={() => {
							if (showHide != 'Hide' ? setShowHide('Hide') : setShowHide('Show'));
						}}
					>
						{showHide}
					</small>
				</div>
				<div className={styles.titles_container}>
					<div className={styles.difficulty}>
						<p>Difficulty</p>
					</div>
					<div>
						<p>Name</p>
					</div>
					<div>
						<p>Mesos</p>
					</div>
					<div>
						<p>Players</p>
					</div>
					<div>
						<p>Characters</p>
					</div>
				</div>
			</header>
			<main>
				<BossList bosses={bosses} />
			</main>
		</>
	);
}
