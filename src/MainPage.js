import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftGameCard from './components/LeftGameCard';
import RightGameCard from './components/RightGameCard';
import ScoreList from './components/ScoreList';
import './App.css';

const MainPage = ({ arr }) => {
    const data = arr;
    const [index, setIndex] = useState(1);
    const navigate = useNavigate();

    // useEffect(() => {
    //     for (let i = arr.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [arr[i], arr[j]] = [arr[j], arr[i]];
    //     }
    //     setData(arr)
    //     document.getElementById('Loading').style.display = 'none';
    //     document.getElementsByClassName('Container')[0].style.display = 'block';
    // }, [])

    // const options = {
    // 	method: 'GET',
    // 	headers: {
    // 		'X-RapidAPI-Key': '17eef74e75msha06ada55a2bec8ep1dfb7djsn2319cfbd1194',
    // 		'X-RapidAPI-Host': 'twitter135.p.rapidapi.com'
    // 	}
    // };

    // async function getData() {
    // fetch('https://twitter135.p.rapidapi.com/v2/Following/?id=1271032370800422912', options)
    // .then(response => {
    // 	response.json()
    // })
    // .then(res => {
    //  console.log(res)
    // 	setData(res.data.user.result.timeline.timeline.instructions[2].entries)
    // })
    // .catch(err => console.error(err));
    // }

    let versus = document.getElementsByClassName("versus");
    let follRight = Math.round(data[index].content.itemContent.user_results.result.legacy.followers_count/1000)*1000;
    let follLeft = Math.round(data[(index - 1 + data.length) % data.length].content.itemContent.user_results.result.legacy.followers_count/1000)*1000;

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
                setIndex((index + 1) % data.length);
            }, 1500);
        }
        else if (verdict === false) {
            versus[0].classList = "versus Rversus";
            setTimeout(() => {
                colorChange(null);
                localStorage.setItem('score', index-1)
                navigate('/gameover');
            }, 1500);
        }
        document.getElementsByClassName('rightdetails')[0].style.display = 'block';
        document.getElementsByClassName('btns')[0].style.display = 'none';
    }

    // window.addEventListener('beforeunload', (e) => { // refresh kar rahe hain to Home page pe bhej do
    //     e.preventDefault();
    //     e.returnValue = '';
    //     setTimeout(() => navigate('/'), 1000);
    //     // navigate('/');
    // })

    return (
        <div>
            <div className='Container'>
                <div className='playGround'>
                    <LeftGameCard arr={data} index={(index - 1 + data.length) % data.length} />
                    <RightGameCard arr={data} clickHigh={checkhigh} clickLow={checklow} index={index} />
                </div>
                <ScoreList index={(index - 1 + data.length) % data.length} />
            </div>
        </div>
    )
}

export default MainPage