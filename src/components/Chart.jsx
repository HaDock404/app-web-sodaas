import '../styles/chart.css'
import React, { useState, useEffect, useRef } from 'react';

function Chart() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const elementRef1 = useRef(null);
    const elementRef2 = useRef(null);
    const targetNumber1 = 15000;
    const targetNumber2 = 230000;

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

    return (
        <section className='chart-section'>
            <article className='chart-image'>
                {/* Image ou autre contenu ici */}
            </article>
            <article className='chart-number'>
                <div className="chart-text" ref={elementRef1}>
                    <h2 className='chart-title'>{number1.toLocaleString()}$</h2>
                    <div className='text-div'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </div>
                <div className="chart-text" ref={elementRef2}>
                    <h2 className='chart-title'>{number2.toLocaleString()}$</h2>
                    <div className='text-div'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                </div>
            </article>
        </section>
    );
}

export default Chart;
