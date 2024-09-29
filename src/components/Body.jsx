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
        en: 'See the Future',
        pl: 'Zobacz Przyszłość'
    }
    const article_text_01 = {
        en: 'Drones are powerful tools, conducting reconnaissance and attack missions piloted by humans. However, they are vulnerable to electromagnetic disruptions, making them unusable in strategic environments. Our technology ensures that your mission continues even in the most critical situations',
        pl: 'Drony to potężne narzędzia, które wykonują misje rozpoznawcze i szturmowe pilotowane przez ludzi. Są jednak podatne na zakłócenia elektromagnetyczne, co czyni je bezużytecznymi w środowiskach strategicznych. Nasza technologia gwarantuje, że Twoja misja będzie kontynuowana nawet w najbardziej krytycznych sytuacjach.'
    }
    //-----------------------------------------------//
    const words_title = {
        en: 'Hi everyone, thx to visit us',
        pl: 'Witam wszystkich'
    }
    const words_part_01 = {
        en: 'At sODAAS - AI, we take pride in driving innovative projects that address technological shifts in an unpredictable and opportunity-rich ecosystem.',
        pl: 'W sODAAS - AI jesteśmy dumni z prowadzenia innowacyjnych projektów, które dotyczą zmian technologicznych w nieprzewidywalnym i bogatym w możliwości ekosystemie.'
    }
    const words_part_02 = {
        en: 'We stand alongside those with great aspirations: building a safer, more sustainable world that is better prepared for the challenges of tomorrow.',
        pl: 'Stoimy u boku tych, którzy mają wielkie aspiracje: budować bezpieczniejszy, bardziej zrównoważony świat, lepiej przygotowany na wyzwania jutra.'
    }
    const words_part_03 = {
        en: 'Our technologies are developed by a team with diverse skills and cultural backgrounds to create a wide range of innovative and high-performance ',
        pl: 'Nasze technologie są opracowywane przez zespół o różnorodnych umiejętnościach i pochodzeniu kulturowym, aby stworzyć szeroką gamę innowacyjnych i wydajnych '
    }
    const words_part_04 = {
        en: 'These solutions lay the groundwork for a promising future by offering concrete responses to the most complex challenges.',
        pl: 'Rozwiązania te kładą podwaliny pod obiecującą przyszłość, oferując konkretne odpowiedzi na najbardziej złożone wyzwania.'
    }
    const words_part_05 = {
        en: "Whether operating in demanding environments or strategic settings, we provide our clients with the tools and technologies they need.",
        pl: ' velit adipisci exercitationem consequuntur quis nulla architecto mollitia officia, soluta voluptates laudantium aperiam fugit, minus reiciendis, perferendis nam veniam ratione molestiae.'
    }
    const words_part_06 = {
        en: "Our mission goes beyond merely delivering services: we aspire to be trusted ",
        pl: 'Nasza misja wykracza poza świadczenie usług: pragniemy być zaufanym '
    }
    const words_part_06_bis = {
        en: ", committed to supporting our clients in their journey toward security and success.",
        pl: ', zaangażowanym we wspieranie naszych klientów na ich drodze do bezpieczeństwa i sukcesu.'
    }
    const words_part_07 = {
        en: "We help them anticipate, adapt, and innovate in their strategies, turning every challenge into an opportunity.",
        pl: 'Pomagamy im przewidywać, dostosowywać i wprowadzać innowacje w swoich strategiach, zamieniając każde wyzwanie w szansę.'
    }
    const words_part_08 = {
        en: "We remain by our clients' side, determined to support them in achieving their most ambitious goals.",
        pl: 'Pozostajemy po stronie naszych klientów, zdeterminowani wspierać ich w osiąganiu najbardziej ambitnych celów.'
    }
    const words_part_09 = {
        en: "No matter the challenge.",
        pl: 'Bez względu na wyzwanie.'
    }
    const words_highlight_01 = {
        en: 'solutions.',
        pl: 'rozwiązań.'
    }
    const words_highlight_02 = {
        en: 'partners',
        pl: 'partnerem'
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
            <Chart />
            <Article 
                article_title={article_title_01[language]}
                article_text={article_text_01[language]}
                direction="row-reverse"
            />
            <Products />
            <Article
                article_title={article_title_01[language]}
                article_text={article_text_01[language]}
            />
            <Ad />
            <Words 
                title={words_title[language]}
                part_01={words_part_01[language]}
                part_02={words_part_02[language]}
                part_03={words_part_03[language]}
                part_04={words_part_04[language]}
                part_05={words_part_05[language]}
                part_06={words_part_06[language]}
                part_06_bis={words_part_06_bis[language]}
                part_07={words_part_07[language]}
                part_08={words_part_08[language]}
                part_09={words_part_09[language]}
                highlight_01={words_highlight_01[language]}
                highlight_02={words_highlight_02[language]}
                founder={words_founder[language]}
            />
        </div>
    )
}

export default Body