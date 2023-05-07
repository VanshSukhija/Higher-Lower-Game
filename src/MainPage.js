import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftGameCard from './components/LeftGameCard';
import RightGameCard from './components/RightGameCard';
import ScoreList from './components/ScoreList';
import './App.css';
import tempdata from './tempdata.json';

const MainPage = () => {
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(1);
    const navigate = useNavigate();

    // for (let i = tempdata.length - 1; i > 0; i--) {
    // 	const j = Math.floor(Math.random() * (i + 1));
    // 	[tempdata[i], tempdata[j]] = [tempdata[j], tempdata[i]];
    // }

    // const options = {
    // 	method: 'GET',
    // 	headers: {
    // 		'X-RapidAPI-Key': '17eef74e75msha06ada55a2bec8ep1dfb7djsn2319cfbd1194',
    // 		'X-RapidAPI-Host': 'twitter135.p.rapidapi.com'
    // 	}
    // };

    // async function getData() {
    // fetch('https://twitter135.p.rapidapi.com/Following/?id=1271032370800422912', options)
    // .then(response => {
    // 	response.json()
    // })
    // .then(res => {
    // 	// console.log(res)
    // 	setData(res.data.user.result.timeline.timeline.instructions[2].entries)
    // })
    // .catch(err => console.error(err));
    // }

    let versus = document.getElementsByClassName("versus");
    let follRight = tempdata[index].content.itemContent.user_results.result.legacy.followers_count;
    let follLeft = tempdata[(index - 1 + tempdata.length) % tempdata.length].content.itemContent.user_results.result.legacy.followers_count;

    function checkhigh() {
        colorChange(follRight >= follLeft);
    }
    function checklow() {
        colorChange(follRight <= follLeft);
    }

    function colorChange(verdict) {
        if (verdict == null) {
            versus[0].classList = "versus Wversus";
        }
        else if (verdict === true) {
            versus[0].classList = "versus Gversus";
            setTimeout(() => {
                colorChange(null);
                setIndex((index + 1) % tempdata.length);
            }, 1000);
        }
        else if (verdict === false) {
            versus[0].classList = "versus Rversus";
            setTimeout(() => {
                colorChange(null);
                localStorage.setItem('score', index-1)
                navigate('/gameover');
            }, 1000);
        }
        document.getElementsByClassName('rightdetails')[0].style.display = 'block';
        document.getElementsByClassName('btns')[0].style.display = 'none';
    }

    return (
        <div>
            <div className='Container'>
                <div className='playGround'>
                    <LeftGameCard arr={data} index={(index - 1 + tempdata.length) % tempdata.length} />
                    <RightGameCard arr={data} clickHigh={checkhigh} clickLow={checklow} index={index} />
                </div>
                <ScoreList index={(index - 1 + tempdata.length) % tempdata.length} />
            </div>
        </div>
    )
}

export default MainPage