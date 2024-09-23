import '../styles/body.css'
import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

import Notification from './Notification'
import BG from '../assets/images/bg.png'
import Intro from './Intro'
import Carousel from './Carousel';
import Article from './Article';
import Ad from './Ad';

function Body() {
    const { language } = useContext(LanguageContext);

    const notification_text = {
        en: 'Discover our products',
        pl: 'Odkryj nasze produkty'
    };
    const word_start = {
        en: 'Artificial Intelligence',
        pl: 'Sztuczna Inteligencja'
    };
    const sentence = {
        en: ' in the service of world ',
        pl: ' w służbie pokoju na '
    }
    const word_end = {
        en: 'peace',
        pl: 'świecie'
    }

const button1 = {
    en: 'Commitments',
    pl: 'Zobowiązania'
}

    return (
        <div className="main">
            <img src={BG} className='image'/>
            <Notification text={notification_text[language]} width='250px'/>
            <Intro 
                word_start={word_start[language]}
                sentence={sentence[language]}
                word_end={word_end[language]}
                button={button1[language]}
            />
            <Carousel />
            <Article />
            <Ad />
            <Article />
        </div>
    )
}

export default Body