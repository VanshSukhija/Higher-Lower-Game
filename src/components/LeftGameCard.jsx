import React, { useEffect, useState } from 'react'
import "../App.css"
import tempdata from '../tempdata.json'

const LeftGameCard = ({arr, index}) => {
	const [data, setData] = useState(tempdata[index].content.itemContent.user_results.result.legacy);

	useEffect(() => {
		setData(tempdata[index].content.itemContent.user_results.result.legacy);
	}, [index])

	return (
		<div className='GameCard' style={{backgroundImage: `url(${data.profile_image_url_https.replace("_normal", "")})`}}>
			{/* <img src={data.profile_image_url_https.replace("_normal", "")} alt='gamepic1' className='userPfp' /> */}
			<div className='gameDataLeft'>
				<div className="userName">"{data.name}"</div>
				<div className="userID">@{data.screen_name}</div>
				<div className="text">has</div>
				<div className="FollowerCount">{data.followers_count}</div>
				<div className="text">followers on Twitter</div>
			</div>
		</div>
	)
}

export default LeftGameCard