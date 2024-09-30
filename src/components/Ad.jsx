import '../styles/ad.css'
import React, { useEffect, useRef } from 'react';

function Ad(props) {
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

    return (
        <section className='ad-section' ref={boxRef}>
            <article className='ad-article appear'>
              <h3 className='ad-title'>{props.title}</h3>
              <div className='ad-text1'>{props.text1}</div>
              <div className='ad-text2'>{props.text2}</div>
              <div className='ad-text3'>{props.text3}</div>
            </article>
        </section>
    )
}

export default Ad