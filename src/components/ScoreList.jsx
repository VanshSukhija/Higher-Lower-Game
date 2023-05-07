import React, { useState, useEffect } from 'react'
import "../App.css"

const ScoreList = ({ index }) => {
	const [ind, setInd] = useState(index);
	useEffect(() => {
		setInd(index);
	}, [index]);

	return (
		<div className='fixedThings'>
			<div className="versus Wversus">VS</div>
			<div className='ScoreList'>
				<div className="score">High Score : 69</div>
				<div className="score currscore">Current Score : {ind}</div>
			</div>
		</div>
	)
}

export default ScoreList
