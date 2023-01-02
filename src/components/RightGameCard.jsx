import React from 'react'
import "../App.css"
import 'font-awesome/css/font-awesome.min.css';

const RightGameCard = () => {
    return (
        <div className='GameCard'>
            <img src='https://via.placeholder.com/400' alt='gamepic1' className='userPfp'/>
            <div className='gameData'>
                <div className="userName">"Vansh Sukhija"</div>
                <div className="userID">@realvanshsukhija</div>
                <div className="text">has</div>
                <button className="higher">Higher</button><br />
                <button className="lower">Lower</button>
                <div className="text">followers than Elon Musk</div>
            </div>
        </div>
    )
}

export default RightGameCard
