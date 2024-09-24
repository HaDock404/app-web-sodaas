import React, { useContext, useRef, useEffect } from 'react';
import { LanguageContext } from './LanguageContext';

import '../styles/product.css'
import Product from './Product'

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
        en: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        pl: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    };
    const button_01 = {
        en: 'Découvrir notre produit',
        pl: 'Découvrir notre produit'
    };
    const info_01_01 = {
        en: 'Lorem ipsum is sumply',
        pl: 'Lorem ipsum is sumply'
    };
    const info_01_02 = {
        en: 'Lorem ipsum is sumply',
        pl: 'Lorem ipsum is sumply'
    };
    const info_01_03 = {
        en: 'Lorem ipsum is sumply',
        pl: 'Lorem ipsum is sumply'
    };
    const info_01_04 = {
        en: 'Lorem ipsum is sumply',
        pl: 'Lorem ipsum is sumply'
    };
    const info_01_05 = {
        en: 'Lorem ipsum is sumply',
        pl: 'Lorem ipsum is sumply'
    };

    const title_02 = {
        en: 'T-200d',
        pl: 'T-200d'
    };
    const intro_02 = {
        en: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        pl: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    };
    const button_02 = {
        en: 'Découvrir notre produit',
        pl: 'Découvrir notre produit'
    };
    const info_02_01 = {
        en: 'Lorem ipsum is sumply',
        pl: 'Lorem ipsum is sumply'
    };
    const info_02_02 = {
        en: 'Lorem ipsum is sumply',
        pl: 'Lorem ipsum is sumply'
    };
    const info_02_03 = {
        en: 'Lorem ipsum is sumply',
        pl: 'Lorem ipsum is sumply'
    };
    const info_02_04 = {
        en: 'Lorem ipsum is sumply',
        pl: 'Lorem ipsum is sumply'
    };
    const info_02_05 = {
        en: 'Lorem ipsum is sumply',
        pl: 'Lorem ipsum is sumply'
    };

    const greatings = {
        en: 'In Progress',
        pl: 'W Toku'
    };

    return (
        <div className='product-main' ref={boxRef}>
            <Product 
                title={title_01[language]}
                border="solid 2px #D9D9D9"
                display="none"
                intro={intro_01[language]}
                button={button_01[language]}
                info_01={info_01_01[language]}
                info_02={info_01_02[language]}
                info_03={info_01_03[language]}
                info_04={info_01_04[language]}
                info_05={info_01_05[language]}
                greatings={greatings[language]}
            />
            <Product 
                title={title_02[language]}
                border="solid 2px #003193"
                display=""
                intro={intro_02[language]}
                button={button_02[language]}
                info_01={info_02_01[language]}
                info_02={info_02_02[language]}
                info_03={info_02_03[language]}
                info_04={info_02_04[language]}
                info_05={info_02_05[language]}
                greatings={greatings[language]}
            />
        </div>
    )
}

export default Products