import React, { useEffect, useRef } from 'react';
import '../styles/article.css'

import Drone from './Drone';
import Signal from './Signal';
import Mission from './Mission';

function Article(props) {
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
        const elements = boxRef.current.querySelectorAll('.article_appear');
        elements.forEach(element => observer.observe(element));
    
        // Clean-up pour éviter d'observer encore après le démontage
        return () => {
          elements.forEach(element => observer.unobserve(element));
        };
      }, []);

    return (
        <section className='section-article' ref={boxRef}>
          <article  className='article-article0  article_appear'>
            <article className='text-article0'>
                <h2 className='title-article'>{props.article_title}</h2>
                <div className='text-div'>{props.article_text}</div>
            </article>
            <article className='gradient-border0' id='gradient-border-00'>
                <img className='article-image' src={props.image} alt="image" />
            </article>
          </article>
        </section>
    )
}

export default Article