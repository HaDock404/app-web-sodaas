import React, { useEffect, useRef } from 'react';

import '../styles/carousel.css';
import Drop_mp4 from '../assets/videos/drop.mp4'
import Guy from '../assets/images/guy.png'
import Aerial from '../assets/images/aerial.png'
import Kamikaze_mp4 from '../assets/videos/kamikaze.mp4'
import Lili from '../assets/images/lili.jpg'
import Unet from '../assets/images/unet.jpg'


function Carousel() {
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
    const elements = boxRef.current.querySelectorAll('.box_carousel');
    elements.forEach(element => observer.observe(element));

    // Clean-up pour éviter d'observer encore après le démontage
    return () => {
      elements.forEach(element => observer.unobserve(element));
    };
  }, []);

  return (
    <ul className='carousel' ref={boxRef}>
        <li className='carousel-element'>
            <div id='carousel_element_id1' className='box_carousel'>
              <img src={Unet} className='image_carousel'/>
            </div>
        </li>
        <li className='carousel-element'>
            <div id='carousel_element_id2' className='box_carousel'>
              <div className="video">
                <video src={Drop_mp4} autoPlay loop muted playsInline preload="auto" />
              </div>
            </div>
            <div id='carousel_element_id3' className='box_carousel'>

            </div>
        </li>
        <li className='carousel-element'>
            <div id='carousel_element_id4' className='box_carousel'>
              <img src={Aerial} className='image_carousel'/>
            </div>
        </li>
        <li className='carousel-element'>
            <div id='carousel_element_id5' className='box_carousel'>

            </div>
            <div id='carousel_element_id6' className='box_carousel'>
              <img src={Lili} className='image_carousel'/>
            </div>
        </li>
        <li className='carousel-element'>
            <div id='carousel_element_id7' className='box_carousel'>
              <div className="video">
                  <video src={Kamikaze_mp4} autoPlay loop muted playsInline preload="auto" />
              </div>
            </div>
            <div id='carousel_element_id8' className='box_carousel'>

            </div>
        </li>
        <li className='carousel-element'>
            <div id='carousel_element_id9' className='box_carousel'>

            </div>
        </li>
    </ul>
  );
}

export default Carousel;
