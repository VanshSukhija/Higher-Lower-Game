import { React } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import GameOver from './GameOver';
import Home from './Home';
import tempdata from './tempdata.json';

const App = () => {

	function reshuffle() {
        for (let i = tempdata.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [tempdata[i], tempdata[j]] = [tempdata[j], tempdata[i]];
        }
    }

	if(!("highscore" in localStorage)) localStorage.setItem("highscore", "0");

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route exact path="/play" element={<MainPage arr={tempdata} />} />
					<Route exact path='/gameover' element={<GameOver shuffle={reshuffle} />} />
					<Route exact path="/" element={<Home shuffle={reshuffle} />} default/>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App