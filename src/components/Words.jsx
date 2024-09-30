import '../styles/words.css'
import Tournesol from '../assets/images/tournesol.png'
import React, { useEffect, useRef } from 'react';

function Words(props) {
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
        <section className='words-section' ref={boxRef}>
            <article className='title-words appear'>
                <span className='highlight'>{props.title}</span> 👋
            </article>
            <article className='text-words appear'>
                {props.part_01}
                <br />
                <br />
                {props.part_02}
                <br />
                <br />
                {props.part_03}
                <span className='highlight'>{props.highlight_01}</span>
                <br />
                {props.part_04}
                {props.part_05}
                <br />
                <br />
                {props.part_06}
                <span className='highlight'>{props.highlight_02}</span>
                {props.part_06_bis}
                <br />
                <br />
                {props.part_07}
                <br />
                <br />
                {props.part_08}
                <br />
                <br />
                {props.part_09}
            </article>
            <article className='end-words'>
                <img src={Tournesol} alt="" className='tournesol'/>
                <div className='end-word-info'>
                    <div className='end-words-info-name'>0xtourneSol</div>
                    <div className='end-words-info-job'>{props.founder}</div>
                </div>
            </article>
        </section>
    )
}

export default Words