import { React } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import GameOver from './GameOver';
import Home from './Home';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/play" element={<MainPage />} />
					<Route exact path='/gameover' element={<GameOver />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App