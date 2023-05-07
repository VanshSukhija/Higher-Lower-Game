import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    return (
        <div id='Home'>
            <div id='HomeDetails'>
                <h1>The Higher Lower Game</h1>
                <br />
                <h2>Who has the most Twitter followers?</h2>
                <br />
                <button id='Playbtn' onClick={() => {
                    navigate('/play')
                }} >Let's Find Out</button>
            </div>
        </div>
    )
}

export default Home
