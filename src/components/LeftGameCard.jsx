import React from 'react'
import "../App.css"

const LeftGameCard = () => {
  return (
    <div className='GameCard'>
        <img src='https://via.placeholder.com/400' alt='gamepic1' className='userPfp'/>
        <div className='gameData'>
            <div className="userName">"Elon Musk"</div>
            <div className="userID">@elonmusk</div>
            <div className="text">has</div>
            <div className="FollowerCount">69000000</div>
            <div className="text">followers on Twitter</div>
        </div>
    </div>
  )
}

export default LeftGameCard