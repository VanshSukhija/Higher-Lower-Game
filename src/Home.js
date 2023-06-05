import React from 'react'
import { useNavigate } from 'react-router-dom'
import up from './assets/green-up.png'
import down from './assets/red-down.png'
import twitter from './assets/twitter.png'

const Home = ({ shuffle }) => {
    const navigate = useNavigate();

    return (
        <div id='Home'>
            <div id='HomeDetails'>
                <h1>
                    The <span id='titleH'>Higher <img src={up} alt="up" /></span>
                    <br />
                    <span id='titleL'><img src={down} alt="down" /> Lower</span> Game
                </h1>
                <br />
                <h2>
                    Who has the most <span id='twitter'>Twitter <img src={twitter} alt="twitter" /></span> followers?
                </h2>
                <br />
                <button id='Playbtn' onClick={() => {
                    shuffle();
                    navigate('/play');
                }} >Let's Find Out</button>
            </div>
        </div>
    )
}

export default Home
