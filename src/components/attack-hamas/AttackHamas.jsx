import { useEffect, useState } from 'react'
import './AttackHamas.scss'
import { getRandomInt } from '../../utils/utils'
export default function AttackHamas() {
    const [ddosShow, setddosShow] = useState(false)
    const [ddosPOINTs, setDDosPOINTS] = useState(0)
    const [ddosLoading, setDDOSLoading] = useState(false)


    const [phishingShow, setphishingShow] = useState(false)
    const [phPOINT, setPHPoints] = useState(0)
    const [phishingLoading, setPhishingLoading] = useState(false)




    const [showWeb, setShowWeb] = useState(false)
    const [spotedWebs, setSpotedWebs] = useState(0)
    const [webLoading, setWebLoading] = useState(false)









    const doDDOS = () => {

        setddosShow(state => !state)
        setDDOSLoading(true)
        const size = getRandomInt(1000);
        const delay = getRandomInt(10000)
        setTimeout(() => {
            setDDosPOINTS(() => {
                setDDOSLoading(false)
                return size
            })
        }, delay);
        
        fetch('https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes', {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "your-api-key",
                "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => console.log(error));
    }


    const doPHISHING = () => {
        setphishingShow(state => !state)
        setPhishingLoading(true)
        const size = getRandomInt(500);
        const delay = getRandomInt(5000)
        setTimeout(() => {
            setPHPoints(() => {
                setPhishingLoading(false)
                return size
            })
        }, delay);
    }

    const doWEB = () => {
        setShowWeb(status => !status)
        setWebLoading(true)
        const size = getRandomInt(9);
        const delay = getRandomInt(20000)
        setTimeout(() => {
            setSpotedWebs(() => {
                setWebLoading(false)
                return size
            })
        }, delay);
    }



    return <div className="attack-hamas">
        <h1> ATTACK HAMSAS</h1>

        <div className='part-wrapper'>
            <div className='attack-part'>
                <div className='title'>

                    <h2>DDOS ATTACK </h2>
                </div>
                <div className='description'>

                    <p>Destroy there Sites, every click will power our systems generate to use your real pc address to make the attack </p>
                </div>
                <div className='button-send' >
                    <button disabled={ddosLoading} onClick={() => doDDOS()}>SHOOT </button>

                </div>
            </div>
            {ddosShow && <div className='reuslt-part'>
                <p>with your Help IP and traffic, to generate a an attack</p>
                {ddosLoading ? 'Loading...'
                    : <>TRAFFIC SIZE: <h3>
                        {ddosPOINTs} bytes
                    </h3></>
                }
            </div>}
        </div>

        <div className='part-wrapper'>
            <div className='attack-part'>
                <div className='title'>
                    <h2>Phishing Attacks </h2>
                </div>
                <div className='description'>
                    <p>Send emails to hamas accounts</p>
                </div>
                <div className='button-send'>
                    <button onClick={() => doPHISHING()}>SEND..</button>
                </div>
            </div>

            {phishingShow && <div className='reuslt-part'>
                <p>with your Help IP and traffic, to generate a an attack</p>
                {phishingLoading ? '...Loading'
                    : <h2>Program {phPOINT}</h2>}
            </div>}

        </div>

        <div className='part-wrapper'>
            <div className='attack-part'>

                <div className='title'>

                    <h2>Web Attacks</h2>
                </div>
                <div className='description'>
                    <p>Taking down Palestenian Sites</p>

                </div>
                <div className='button-send'>
                    <button onClick={() => doWEB()}>Take </button>

                </div>

            </div>

            {showWeb && <div className='reuslt-part'>
                <p>we are increasing requests from your domain location on Hamas Sites</p>
                {webLoading ? 'Loading...' :
                    <h2>
                        Spoted Sites: {spotedWebs}
                    </h2>}
            </div>}

        </div>

    </div>
}
