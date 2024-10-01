import '../styles/body.css'
import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

import Notification from './Notification'
import BG from '../assets/images/bg.png'
import Intro from './Intro'
import Carousel from './Carousel';
import Article_00 from './Article_00';
import Article_01 from './Article_01';
import Article_02 from './Article_02';
import Ad from './Ad';
import Chart from './Chart';
import Words from './Words';
import Products from './Products';
import DroneArticle from '../assets/images/T-100d.jpg'
import Action from './Action';


function BodyTest() {
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
    const article_title_00 = {
        en: 'War Changes',
        pl: 'Zmiany Wojenne'
    }
    const article_text_00 = {
        en: 'Actually no, war never changes. But today new weapons have appeared on the battlefield. Drones are major assets for armies, they are efficient and easy to use. Their use can reverse military strategy and they must now be taken into consideration.',
        pl: 'Właściwie nie, wojna nigdy się nie zmienia. Ale dzisiaj na polu bitwy pojawiła się nowa broń. Drony są głównym atutem armii, są wydajne i łatwe w obsłudze. Ich użycie może odwrócić strategię wojskową i należy je teraz wziąć pod uwagę.'
    }

    const article_title_01 = {
        en: 'See the Future',
        pl: 'Zobacz Przyszłość'
    }
    const article_text_01 = {
        en: 'Drones are powerful tools, conducting reconnaissance and attack missions piloted by humans. However, they are vulnerable to electromagnetic disruptions, making them unusable in strategic environments. Our technology ensures that your mission continues even in the most critical situations',
        pl: 'Drony to potężne narzędzia, które wykonują misje rozpoznawcze i szturmowe pilotowane przez ludzi. Są jednak podatne na zakłócenia elektromagnetyczne, co czyni je bezużytecznymi w środowiskach strategicznych. Nasza technologia gwarantuje, że Twoja misja będzie kontynuowana nawet w najbardziej krytycznych sytuacjach.'
    }

    const article_title_02 = {
        en: 'See the Future',
        pl: 'Zobacz Przyszłość'
    }
    const article_text_02 = {
        en: 'Drones are powerful tools, conducting reconnaissance and attack missions piloted by humans. However, they are vulnerable to electromagnetic disruptions, making them unusable in strategic environments. Our technology ensures that your mission continues even in the most critical situations',
        pl: 'Drony to potężne narzędzia, które wykonują misje rozpoznawcze i szturmowe pilotowane przez ludzi. Są jednak podatne na zakłócenia elektromagnetyczne, co czyni je bezużytecznymi w środowiskach strategicznych. Nasza technologia gwarantuje, że Twoja misja będzie kontynuowana nawet w najbardziej krytycznych sytuacjach.'
    }
    //-----------------------------------------------//
    const action_title = {
        en: 'How It Works ?',
        pl: 'Jak to działa ?'
    }
    const action_el1 = {
        en: 'Drone Deployment',
        pl: 'Rozmieszczenie dronów'
    }
    const action_el2 = {
        en: 'Journey and Objectives',
        pl: 'Podróż i cele'
    }
    const action_el3 = {
        en: 'Computer Vision',
        pl: 'Wizja komputerowa'
    }
    const action_el4 = {
        en: 'Model Prediction',
        pl: 'Przewidywanie modelu'
    }
    const action_el5 = {
        en: 'Target Acquisition',
        pl: 'Pozyskiwanie celu'
    }
    const action_text = {
        en: 'In the field of computer vision, image segmentation plays a crucial role in many applications. The use of convolutional neural networks (CNN) has proven to be particularly effective in this task. We trained a neural network to perform image segmentation of different military vehicles to make drones autonomous on the battlefield.',
        pl: 'W dziedzinie widzenia komputerowego segmentacja obrazu odgrywa kluczową rolę w wielu zastosowaniach. Szczególnie skuteczne w tym zadaniu okazało się wykorzystanie splotowych sieci neuronowych (CNN). Wytrenowaliśmy sieć neuronową do segmentacji obrazu różnych pojazdów wojskowych, aby drony stały się autonomiczne na polu bitwy.'
    }
    //-----------------------------------------------//
    const ad_title = {
        en: 'Why invest with Us ?',
        pl: 'Dlaczego warto inwestować z nami?'
    }
    const ad_text1 = {
        en: "The choice of innovation requires younger and more dynamic companies. Our teams are made up of the best people in tech, with an average age of 25, it is from us that tomorrow's revolutions will come out.",
        pl: 'Wybór innowacji wymaga młodszych i bardziej dynamicznych firm. Nasze zespoły składają się z najlepszych ludzi w technologii, ze średnią wieku 25 lat, to od nas wyjdą jutrzejsze rewolucje.'
    }
    const ad_text2 = {
        en: 'Europe needs to rebuild its security, investing in companies located in the heart of Europe is the best way to protect the rest of the world.',
        pl: 'Europa musi odbudować swoje bezpieczeństwo, inwestowanie w spółki zlokalizowane w sercu Europy to najlepszy sposób na ochronę reszty świata.'
    }
    const ad_text3 = {
        en: "Let's build the best weapons of deterrence to prevent the next war.",
        pl: 'Zbudujmy najlepszą broń odstraszającą, aby zapobiec kolejnej wojnie.'
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
            <Products />
            <Ad 
                title={ad_title[language]}
                text1={ad_text1[language]}
                text2={ad_text2[language]}
                text3={ad_text3[language]}
            />
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

export default BodyTest