import React, { useEffect, useState } from 'react'
import "../App.css"
import tempdata from '../tempdata.json'
import Xwhite from '../assets/Xwhite.png'

const LeftGameCard = ({arr, index}) => {
	const [data, setData] = useState(tempdata[index].content.itemContent.user_results.result.legacy);

	useEffect(() => {
		setData(tempdata[index].content.itemContent.user_results.result.legacy);
	}, [index])

	return (
		<div className='GameCard' style={{backgroundImage: `url(${data.profile_image_url_https.replace("_normal", "")})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
			<div className='gameDataLeft'>
				<div className="userName">"{data.name}"</div>
				<div className="userID">@{data.screen_name}</div>
				<div className="text">has</div>
				<div className="FollowerCount">{(Math.round(data.followers_count/1000)*1000).toLocaleString("en-US")}</div>
				<div className="text">followers on <img src={Xwhite} alt="X" style={{width: '20px', position: 'relative', top: '4px'}} /></div>
			</div>
		</div>
	)
}

export default LeftGameCard