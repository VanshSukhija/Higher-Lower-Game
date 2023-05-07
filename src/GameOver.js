import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const GameOver = () => {

	let bad = ['https://media2.giphy.com/media/10Mn81By5JVRnO/giphy.gif?cid=ecf05e47oge9572v8vkwna3wfwtzduz1wzll4vnsjd12seor&ep=v1_gifs_search&rid=giphy.gif&ct=g', 'https://media2.giphy.com/media/1oKQqphQDlpb2rHUpZ/giphy.gif?cid=ecf05e47gkvo1h0bckw1v0x783v9tlx5v6w2fxggd6ehx5oe&ep=v1_gifs_search&rid=giphy.gif&ct=g'];
	let avg = ['https://media3.giphy.com/media/l1LbUHrJb7GpuOHK0/giphy.gif?cid=ecf05e479ed3t43g6qrdcy5e18h43r4hl1q8dasfkwy93lq2&ep=v1_gifs_search&rid=giphy.gif&ct=g']
	let good = ['family-guy', 'https://media1.giphy.com/media/3aO2dC3fVZlK/giphy.gif?cid=ecf05e478gk5dl0xv21iunioz2jd58k8gqxg9iuso7v64j4b&ep=v1_gifs_search&rid=giphy.gif&ct=g']

	const navigate = useNavigate();
	const score = localStorage.getItem('score');
	const highscore = localStorage.getItem('highscore');
	console.log(score)

	return (
		<div id='postGame' style={{backgroundImage: `url(${bad[1]})`}}>
			<div id='postGameContainer'>
				<h1>GAME OVER</h1><br />
				<h2>Score: {score}</h2>
				<br />
				<button id='PlayAgain' onClick={() => {
					localStorage.setItem('highscore', (score > highscore) ? score : highscore);
					localStorage.setItem('score', 0);
					navigate('/play');
				}}>Play Again</button>
				<button id='gotoHome' onClick={() => {
					localStorage.setItem('highscore', (score > highscore) ? score : highscore);
					localStorage.setItem('score', 0);
					navigate('/');
				}}>Back to Home</button>
			</div>
		</div>
	)
}

export default GameOver