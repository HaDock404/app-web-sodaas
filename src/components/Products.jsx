import React, { useContext, useRef, useEffect } from 'react';
import { LanguageContext } from './LanguageContext';

import '../styles/product.css'
import Product from './Product'
import Drone1 from '../assets/images/T-100d.jpeg'
import Drone2 from '../assets/images/T-200d.jpeg'

function Products() {

    const boxRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
              observer.unobserve(entry.target);
            }
          });
        });
    
        // Observer chaque élément de la liste
        const elements = boxRef.current.querySelectorAll('.appear');
        elements.forEach(element => observer.observe(element));
    
        // Clean-up pour éviter d'observer encore après le démontage
        return () => {
          elements.forEach(element => observer.unobserve(element));
        };
      }, []);

    const { language } = useContext(LanguageContext);

    const title_01 = {
        en: 'T-100d',
        pl: 'T-100d'
    };
    const intro_01 = {
        en: 'Autonomous Attack and Defense drone for infantry combat',
        pl: 'Autonomiczny dron ataku i obrony do walki piechoty'
    };
    const button_01 = {
        en: 'Discover our product',
        pl: 'Odkryj nasz produkt'
    };
    const info_01_01 = {
        en: 'Speed of 50km/h with small load',
        pl: 'prędkość 50km/h przy małym obciążeniu'
    };
    const info_01_02 = {
        en: '3km range with clear weather',
        pl: 'Zasięg 3km przy dobrej pogodzie'
    };
    const info_01_03 = {
        en: 'Transport weight of 4 kg',
        pl: 'Waga transportowa 4 kg'
    };
    const info_01_04 = {
        en: '10 categories of registered targets',
        pl: '10 kategorii zarejestrowanych celów'
    };
    const info_01_05 = {
        en: '',
        pl: ''
    };

    const title_02 = {
        en: 'T-200d',
        pl: 'T-200d'
    };
    const intro_02 = {
        en: 'Autonomous very long distance reconnaissance and attack drone',
        pl: 'Autonomiczny dron rozpoznawczo-szturmowy na bardzo duże odległości'
    };
    const button_02 = {
        en: 'Discover our product',
        pl: 'Odkryj nasz produkt'
    };
    const info_02_01 = {
        en: 'Night computer vision',
        pl: 'Nocna wizja komputerowa'
    };
    const info_02_02 = {
        en: '400km range with clear weather',
        pl: 'Zasięg 400 km przy dobrej pogodzie'
    };
    const info_02_03 = {
        en: 'Target acquisition by personalized training',
        pl: 'Pozyskiwanie celów poprzez trening obrazu'
    };
    const info_02_04 = {
        en: 'Low or High flight altitude',
        pl: 'Niska lub wysoka wysokość lotu'
    };
    const info_02_05 = {
        en: 'Maximum transport load of 5kg',
        pl: 'Maksymalne obciążenie transportowe 5kg'
    };

    const greatings = {
        en: 'In Progress',
        pl: 'W Toku'
    };

    return (
        <div className='product-main' ref={boxRef}>
            <Product 
                title={title_01[language]}
                image={Drone1}
                border="solid 2px #D9D9D9"
                display="none"
                intro={intro_01[language]}
                button={button_01[language]}
                link='/'
                info_01={info_01_01[language]}
                info_02={info_01_02[language]}
                info_03={info_01_03[language]}
                info_04={info_01_04[language]}
                info_05={info_01_05[language]}
                greatings={greatings[language]}
                style1="white"
            />
            <Product 
                title={title_02[language]}
                image={Drone2}
                border="solid 2px #003193"
                display=""
                intro={intro_02[language]}
                button={button_02[language]}
                link='/'
                info_01={info_02_01[language]}
                info_02={info_02_02[language]}
                info_03={info_02_03[language]}
                info_04={info_02_04[language]}
                info_05={info_02_05[language]}
                greatings={greatings[language]}
                style1='#C7C7C7'
            />
        </div>
    )
}

export default Products