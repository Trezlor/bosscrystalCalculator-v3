import Head from 'next/head';
import { useState } from 'react';
import BossesList from '../components/BossesList';
import bosses from '../json/data';
import styles from '../styles/Home.module.css';

export default function Home() {
	let [showHideButton, setShowHideButton] = useState('show_info_container');
	let [showHideButtonName, setShowHideButtonName] = useState('Hide');

	return (
		<>
			<Head>
				<title>Maplestory - Boss crystal calculator</title>
			</Head>

			<header>
				<div className={styles.info_container + ' ' + styles[showHideButton]}>
					<h1>Boss Crystal Calculator</h1>

					<h2>Players:</h2>
					<p>Total amount of players you have in your party. Crystal value will be adjusted accordingly.</p>

					<h2>Characters:</h2>
					<p>Total amount of characters you have that can beat the specific boss.</p>

					<h2>Result:</h2>
					<p>After adding your characters, below on the page you&apos;ll have a complete list of the most profitable crystals to sell.</p>
					<small
						onClick={() => {
							if (
								showHideButton == 'show_info_container'
									? setShowHideButton('hide_info_container')
									: setShowHideButton('show_info_container')
							);
							if (showHideButton == 'show_info_container' ? setShowHideButtonName('Show') : setShowHideButtonName('Hide'));
						}}
					>
						{showHideButtonName}
					</small>
				</div>
			</header>

			<main>
				{/* TITLES OF COLUMNS */}
				<div className={styles.titles_container}>
					<p>Difficulty</p>
					<p>Name</p>
					<p>Mesos</p>
					<p>Players</p>
					<p>Characters</p>
				</div>

				{/* LIST OF BOSSES */}
				<BossesList bosses={bosses} />
			</main>

			<footer></footer>
		</>
	);
}
