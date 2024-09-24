import '../styles/body.css'
import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

import Notification from './Notification'
import BG from '../assets/images/bg.png'
import Intro from './Intro'
import Carousel from './Carousel';
import Article from './Article';
import Ad from './Ad';
import Chart from './Chart';
import Words from './Words';
import Product from './Product';

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
    const word_sentence = {
        en: ' in the service of world ',
        pl: ' w służbie pokoju na '
    }
    const word_end = {
        en: 'peace',
        pl: 'świecie'
    }
    const word_button1 = {
        en: 'Commitments',
        pl: 'Zobowiązania'
    }

    const article_title_01 = {
        en: 'Test de titre',
        pl: 'Test de titre'
    }
    const article_text_01 = {
        en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis adipisci illum obcaecati? Officia incidunt, aliquam ex consequatur maxime vero! Voluptates molestiae voluptas et neque mollitia nisi incidunt eligendi sapiente fugiat!',
        pl: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis adipisci illum obcaecati? Officia incidunt, aliquam ex consequatur maxime vero! Voluptates molestiae voluptas et neque mollitia nisi incidunt eligendi sapiente fugiat!'
    }

    return (
        <div className="main">
            <img src={BG} className='image'/>
            <Notification text={notification_text[language]} width='250px'/>
            <Intro 
                word_start={word_start[language]}
                sentence={word_sentence[language]}
                word_end={word_end[language]}
                button={word_button1[language]}
            />
            <Carousel />
            <Article 
                article_title={article_title_01[language]}
                article_text={article_text_01[language]}
            />
            <Ad />
            <Article 
                article_title={article_title_01[language]}
                article_text={article_text_01[language]}
            />
            <Chart />
            <Article
                article_title={article_title_01[language]}
                article_text={article_text_01[language]}
            />
            <Product />
            <Words />
        </div>
    )
}

export default Body