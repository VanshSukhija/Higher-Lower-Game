import React, { useEffect, useState } from 'react'
import "../App.css"
import 'font-awesome/css/font-awesome.min.css';
import tempdata from '../tempdata.json'

const RightGameCard = ({ arr, clickHigh, clickLow, index }) => {
    const [data, setData] = useState(tempdata[index].content.itemContent.user_results.result.legacy);
    const [prevData, setPrevData] = useState(tempdata[index-1].content.itemContent.user_results.result.legacy)

    useEffect(() => {
        setData(tempdata[index].content.itemContent.user_results.result.legacy);
        setPrevData(tempdata[index-1].content.itemContent.user_results.result.legacy);
        document.getElementsByClassName('btns')[0].style.display = 'block';
        document.getElementsByClassName('rightdetails')[0].style.display = 'none';
    }, [index]);

    return (
        <div className='GameCard'>
            <img src={data.profile_image_url_https.replace("_normal", "")} alt='gamepic1' className='userPfp' />
            <div className='gameData'>
                <div className="userName">"{data.name}"</div>
                <div className="userID">@{data.screen_name}</div>
                <div className="text">has</div>
                <div className="rightTransitiondiv">
                    <div className="rightdetails">
                        <div className="FollowerCount">{data.followers_count}</div>
                        <div className="text">followers on Twitter</div>
                    </div>
                    <div className="btns">
                        <button className="btnhigher" onClick={clickHigh}>Higher</button><br />
                        <button className="btnlower" onClick={clickLow}>Lower</button>
                        <div className="text">followers than {prevData.name}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightGameCard
