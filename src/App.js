import React from 'react'
import LeftGameCard from './components/LeftGameCard'
import RightGameCard from './components/RightGameCard'
import './App.css';

const App = () => {
	return (
		<div className='playGround'>
			<LeftGameCard />
			<RightGameCard />
		</div>
	)
}

export default App