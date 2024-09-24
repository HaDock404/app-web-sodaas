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
import Products from './Products';

function Body() {
    const { language } = useContext(LanguageContext);

    const notification_text = {
        en: 'Discover our products',
        pl: 'Odkryj nasze produkty'
    };
    //-----------------------------------------------//
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
    //-----------------------------------------------//
    const article_title_01 = {
        en: 'Test de titre',
        pl: 'Test de titre'
    }
    const article_text_01 = {
        en: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis adipisci illum obcaecati? Officia incidunt, aliquam ex consequatur maxime vero! Voluptates molestiae voluptas et neque mollitia nisi incidunt eligendi sapiente fugiat!',
        pl: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis adipisci illum obcaecati? Officia incidunt, aliquam ex consequatur maxime vero! Voluptates molestiae voluptas et neque mollitia nisi incidunt eligendi sapiente fugiat!'
    }
    //-----------------------------------------------//
    const words_title = {
        en: 'Hi everyone, thx to visit us',
        pl: 'Witam wszystkich'
    }
    const words_part_01 = {
        en: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit velit adipisci exercitationem consequuntur quis nulla architecto mollitia officia, soluta voluptates laudantium aperiam fugit, minus reiciendis, perferendis nam veniam ratione molestiae.',
        pl: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit velit adipisci exercitationem consequuntur quis nulla architecto mollitia officia, soluta voluptates laudantium aperiam fugit, minus reiciendis, perferendis nam veniam ratione molestiae.'
    }
    const words_part_02 = {
        en: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit velit adipisci exercitationem consequuntur quis nulla architecto mollitia officia, soluta voluptates laudantium aperiam fugit, minus reiciendis, ',
        pl: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit velit adipisci exercitationem consequuntur quis nulla architecto mollitia officia, soluta voluptates laudantium aperiam fugit, minus reiciendis, '
    }
    const words_part_03 = {
        en: 'nam veniam ratione molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit velit adipisci exercitationem consequuntur quis nulla architecto mollitia officia, soluta voluptates laudantium aperiam fugit, minus reiciendis, perferendis nam veniam ratione molestiae.',
        pl: 'nam veniam ratione molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit velit adipisci exercitationem consequuntur quis nulla architecto mollitia officia, soluta voluptates laudantium aperiam fugit, minus reiciendis, perferendis nam veniam ratione molestiae.'
    }
    const words_part_04 = {
        en: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
        pl: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. '
    }
    const words_part_05 = {
        en: ' velit adipisci exercitationem consequuntur quis nulla architecto mollitia officia, soluta voluptates laudantium aperiam fugit, minus reiciendis, perferendis nam veniam ratione molestiae.',
        pl: ' velit adipisci exercitationem consequuntur quis nulla architecto mollitia officia, soluta voluptates laudantium aperiam fugit, minus reiciendis, perferendis nam veniam ratione molestiae.'
    }
    const words_part_06 = {
        en: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        pl: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    }
    const words_highlight_01 = {
        en: 'perferendis',
        pl: 'perferendis'
    }
    const words_highlight_02 = {
        en: 'Reprehenderit',
        pl: 'Reprehenderit'
    }
    const words_founder = {
        en: 'Founder',
        pl: 'Założyciel'
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
            <Products />
            <Words 
                title={words_title[language]}
                part_01={words_part_01[language]}
                part_02={words_part_02[language]}
                part_03={words_part_03[language]}
                part_04={words_part_04[language]}
                part_05={words_part_05[language]}
                part_06={words_part_06[language]}
                highlight_01={words_highlight_01[language]}
                highlight_02={words_highlight_02[language]}
                founder={words_founder[language]}
            />
        </div>
    )
}

export default Body