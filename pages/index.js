import Head from 'next/head';
import { useState } from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import BossesList from '../components/BossesList';
import bosses from '../json/data';
import styles from '../styles/Home.module.css';

export default function Home() {
	let [showHideContainer, setShowHideButton] = useState('show_info_container');
	let [showHideButtonName, setShowHideButtonName] = useState('Hide');

	// const darkThemeMq = window.matchMedia('prefers-color-scheme: dark');
	// if (darkThemeMq.matches) {
	// 	console.log('dark theme');
	// } else {
	// 	console.log('light theme');
	// }

	return (
		<>
			<Head>
				<title>Maplestory - Boss crystal calculator</title>
			</Head>

			<header>
				<div className={styles.info_container + ' ' + styles[showHideContainer]}>
					<h1>Boss Crystal Calculator</h1>

					<h2>Party Size:</h2>
					<p className={styles.space_paragraph}>
						Total amount of players you have in your party. Crystal value will be adjusted accordingly.
					</p>
					<p>If you are unsure about this, leave it at 1.</p>

					<h2>Characters:</h2>
					<p className={styles.space_paragraph}>Total amount of characters you have that can beat a specific boss.</p>
					<p>
						I.e. if you have a character that can beat Easy, Normal and Hard Will, you should only add 1 to Hard Will for that character.
					</p>

					<h2>Result:</h2>
					<p>After adding your characters, below on the page you&apos;ll have a complete list of the most profitable crystals to sell.</p>

					<BsFillSunFill className={styles.sun_icon} />

					<small
						onClick={() => {
							if (
								showHideContainer == 'show_info_container'
									? setShowHideButton('hide_info_container')
									: setShowHideButton('show_info_container')
							);
							if (showHideContainer == 'show_info_container' ? setShowHideButtonName('Show') : setShowHideButtonName('Hide'));
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
					<p>Party Size</p>
					<p>Characters</p>
				</div>

				{/* LIST OF BOSSES */}
				<BossesList bosses={bosses} />
			</main>

			<footer></footer>
		</>
	);
}
