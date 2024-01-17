import React from 'react'
import { useNavigate } from 'react-router-dom';
import bad from './assets/minecraft.gif'
import good from './assets/brofist.gif'
import avg from './assets/what-up.gif'

const GameOver = ({ shuffle }) => {
	const navigate = useNavigate();
	const score = parseInt(localStorage.getItem('score'));
	const highscore = parseInt(localStorage.getItem('highscore'));

	let gif = avg;
	if (score >= highscore) gif = good
	else if (score < 0.5 * highscore) gif = bad

	return (
		<div id='postGame' style={{ backgroundImage: `url(${gif})` }}>
			<div id='postGameContainer'>
				<h1>GAME OVER</h1>
				<br />
				<h2>Your Score: {score}</h2>
				<br />
				<h2>High Score: {highscore}</h2>
				<br />
				{
					(score > highscore) ?
						<h2>Dude! Did you break your own HighScore!?</h2> :
						(score >= 0.5 * highscore) ?
							<h2>Good Job! You are getting better...</h2> :
							<h2>Naah dawg, I know you ain't that bad :/</h2>
				}
				<br />
				<button id='PlayAgain' onClick={() => {
					shuffle();
					localStorage.setItem('highscore', (score > highscore) ? String(score) : String(highscore));
					localStorage.setItem('score', 0);
					navigate('/play');
				}}>Play Again</button>
				<button id='gotoHome' onClick={() => {
					localStorage.setItem('highscore', (score > highscore) ? String(score) : String(highscore));
					localStorage.setItem('score', 0);
					navigate('/');
				}}>Back to Home</button>
			</div>
		</div>
	)
}

export default GameOver