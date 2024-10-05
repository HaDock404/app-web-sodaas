import { Link } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import '../styles/intro.css'

function Intro(props) {
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
        <div class="hero" ref={boxRef}>
            <h1 className='appear' id='diff_appearance'>
                <span class="highlight">{props.word_start}</span>{props.sentence}<span class="highlight">{props.word_end}</span>
            </h1>
            <Link to="/commitments" class="cta-button">{props.button}</Link>
        </div>
    )
}

export default Intro