import '../styles/action.css'
import React, { useState, useEffect, useRef } from 'react';
import Soldier from './Soldier.jsx';
import Tablet from './Tablet.jsx'
import Tank from './Tank.jsx'
import AI from './AI.jsx'
import TankTarget from './TankTarget.jsx'
import TankIcon from './TankIcon.jsx';
import DroneIcon from './DroneIcon.jsx';

function Action(props) {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const elementRef1 = useRef(null);
    const elementRef2 = useRef(null);
    const targetNumber1 = 15000;
    const targetNumber2 = 230000;
    const boxRef = useRef(null);

    // Hook pour animer le premier nombre
    useEffect(() => {
        const handleScroll = (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            let start = 0;
            const duration = 800; // Durée en millisecondes pour atteindre le nombre cible
            const increment = targetNumber1 / (duration / 16.67); // Approximativement 60 frames par seconde
    
            const animate = () => {
              if (start < targetNumber1) {
                start += increment;
                setNumber1(Math.floor(start));
                requestAnimationFrame(animate);
              } else {
                setNumber1(targetNumber1); // Fixer le nombre final
              }
            };
    
            animate();
          }
        };
    
        const observer = new IntersectionObserver(handleScroll, { threshold: 0.1 });
        if (elementRef1.current) {
          observer.observe(elementRef1.current);
        }
    
        return () => observer.disconnect();
      }, []);

    // Hook pour animer le second nombre
    useEffect(() => {
        const handleScroll = (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            let start = 0;
            const duration = 2500; // Durée en millisecondes pour atteindre le nombre cible
            const increment = targetNumber2 / (duration / 16.67); // Approximativement 60 frames par seconde
    
            const animate = () => {
              if (start < targetNumber2) {
                start += increment;
                setNumber2(Math.floor(start));
                requestAnimationFrame(animate);
              } else {
                setNumber2(targetNumber2); // Fixer le nombre final
              }
            };
    
            animate();
          }
        };
    
        const observer = new IntersectionObserver(handleScroll, { threshold: 0.1 });
        if (elementRef2.current) {
          observer.observe(elementRef2.current);
        }
    
        return () => observer.disconnect();
      }, []);

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

    return (
        <section className='action-section' ref={boxRef}>
            <h2 className='action-title'>{props.title}</h2>
            <article className='action-image appear'>
              <div className='action-image-text'>
                <div className='action-image_text-color' id='el1'>{props.el1}</div>
                <div className='action-image_text-color' id='el2'>{props.el2}</div>
                <div className='action-image_text-color' id='el3'>{props.el3}</div>
                <div className='action-image_text-color' id='el4'>{props.el4}</div>
                <div className='action-image_text-color' id='el5'>{props.el5}</div>
              </div>
              <div id='action-position'>
                <Soldier />
                <Tablet />
                <Tank />
                <AI />
                <TankTarget />
              </div>
            </article>

            <article className='action-number'>
              {props.text}
            </article>
        </section>
    );
}

export default Action;
