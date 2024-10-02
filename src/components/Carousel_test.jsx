import React, { useEffect, useRef } from 'react';

import '../styles/carousel_test.css';
import Drop_mp4 from '../assets/videos/drop.mp4'
//import Guy from '../assets/images/guy.png'
import Aerial from '../assets/images/aerial.png'
import Kamikaze_mp4 from '../assets/videos/kamikaze.mp4'
import Lili from '../assets/images/lili.jpg'
import Drone from '../assets/images/drone.JPG'
import sODAAS from '../assets/images/sodaas.svg'
import Unet from '../assets/images/unet.jpg'
import Led from './Led';


function Carousel() {
  const boxRef = useRef(null);

  {/*useEffect(() => {
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
  }, []);*/}

  return (
    <article className='carousel'>
      <ul className='ul-carousel0' ref={boxRef}>
        <li className='carousel-element'>
            <div id='carousel_element_id1' className='box_carousel'>
              <img src={Drone} className='image_carousel'/>
            </div>
        </li>
        <li className='carousel-element'>
            <div id='carousel_element_id2' className='box_carousel'>
              <div className="video">
                <video src={Drop_mp4} autoPlay loop muted playsInline preload="auto" />
              </div>
            </div>

            <div id='carousel_element_id3' className='box_carousel'>
              <div class="box_carousel_die_message">
                          <div className='box_carousel_die_message_placement'>
                              <img className='box_carousel_die_message_github' src={sODAAS} alt="" />
                              <div className='box_carousel_die_message_title'>sODAAS</div>
                              <div className='box_carousel_die_message_time'>now</div>
                          </div>
                          <div className='box_carousel_die_message_text'>Target localisation</div>
                          <div className='box_carousel_die_message_info'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          </div>
                      </div>

                      <div class="box_carousel_die_message">
                          <div className='box_carousel_die_message_placement'>
                              <img className='box_carousel_die_message_github' src={sODAAS} alt="" />
                              <div className='box_carousel_die_message_title'>sODAAS</div>
                              <div className='box_carousel_die_message_time'>10min ago</div>
                          </div>
                          <div className='box_carousel_die_message_text'>Searching ..</div>
                          <div className='box_carousel_die_message_info'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          </div>
                      </div>

                      <div class="box_carousel_die_message">
                          <div className='box_carousel_die_message_placement'>
                              <img className='box_carousel_die_message_github' src={sODAAS} alt="" />
                              <div className='box_carousel_die_message_title'>sODAAS</div>
                              <div className='box_carousel_die_message_time'>15min ago</div>
                          </div>
                          <div className='box_carousel_die_message_text'>Deployment & objectives</div>
                          <div className='box_carousel_die_message_info'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          </div>
                      </div>

                      <div class="box_carousel_die_message">
                          <div className='box_carousel_die_message_placement'>
                              <img className='box_carousel_die_message_github' src={sODAAS} alt="" />
                              <div className='box_carousel_die_message_title'>sODAAS</div>
                              <div className='box_carousel_die_message_time'>5min ago</div>
                          </div>
                          <div className='box_carousel_die_message_text'>Identified vehicle</div>
                          <div className='box_carousel_die_message_info'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          </div>
                      </div>
            </div>
        </li>
        <li className='carousel-element'>
            <div id='carousel_element_id4' className='box_carousel'>
              <img src={Aerial} className='image_carousel'/>
            </div>
        </li>
        <li className='carousel-element'>
            <div id='carousel_element_id5' className='box_carousel'>
                  <div className='box_carousel_notification'>
                      <Led />
                      <div>@hazi and +4 are <span className='connected'>connected</span></div>
                  </div>
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
              <div id='carousel_small'>small</div>
              <div id='carousel_OD'>
                Offensive<span id='carousel_span'>&</span>Defensive
              </div>
              <div id='carousel_AA'>Autonomous Aircraft</div>
              <div id='carousel_system'>System</div>
            </div>
        </li>
        <li className='carousel-element'>
            <div id='carousel_element_id9' className='box_carousel'>
              <img src={Unet} className='image_carousel'/>
            </div>
        </li>
    </ul>
    









    <ul className='ul-carousel1' ref={boxRef}>
        <li className='carousel-element' id="testcar">
            <div id='carousel_element_id2' className='box_carousel'>
              <div className="video">
                <video src={Drop_mp4} autoPlay loop muted playsInline preload="auto" />
              </div>
            </div>

            <div id='carousel_element_id3' className='box_carousel'>
              <div class="box_carousel_die_message">
                          <div className='box_carousel_die_message_placement'>
                              <img className='box_carousel_die_message_github' src={sODAAS} alt="" />
                              <div className='box_carousel_die_message_title'>sODAAS</div>
                              <div className='box_carousel_die_message_time'>now</div>
                          </div>
                          <div className='box_carousel_die_message_text'>Target localisation</div>
                          <div className='box_carousel_die_message_info'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          </div>
                      </div>

                      <div class="box_carousel_die_message">
                          <div className='box_carousel_die_message_placement'>
                              <img className='box_carousel_die_message_github' src={sODAAS} alt="" />
                              <div className='box_carousel_die_message_title'>sODAAS</div>
                              <div className='box_carousel_die_message_time'>10min ago</div>
                          </div>
                          <div className='box_carousel_die_message_text'>Searching ..</div>
                          <div className='box_carousel_die_message_info'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          </div>
                      </div>

                      <div class="box_carousel_die_message">
                          <div className='box_carousel_die_message_placement'>
                              <img className='box_carousel_die_message_github' src={sODAAS} alt="" />
                              <div className='box_carousel_die_message_title'>sODAAS</div>
                              <div className='box_carousel_die_message_time'>15min ago</div>
                          </div>
                          <div className='box_carousel_die_message_text'>Deployment & objectives</div>
                          <div className='box_carousel_die_message_info'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          </div>
                      </div>

                      <div class="box_carousel_die_message">
                          <div className='box_carousel_die_message_placement'>
                              <img className='box_carousel_die_message_github' src={sODAAS} alt="" />
                              <div className='box_carousel_die_message_title'>sODAAS</div>
                              <div className='box_carousel_die_message_time'>5min ago</div>
                          </div>
                          <div className='box_carousel_die_message_text'>Identified vehicle</div>
                          <div className='box_carousel_die_message_info'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          </div>
                      </div>
            </div>
            <div id='carousel_element_id4bis' className='box_carousel'>
              <img src={Aerial} className='image_carousel'/>
            </div>
        </li>

        <li className='carousel-element'>
            <div id='carousel_element_id5' className='box_carousel'>
                  <div className='box_carousel_notification'>
                      <Led />
                      <div>@hazi and +4 are <span className='connected'>connected</span></div>
                  </div>
            </div>
            <div id='carousel_element_id6' className='box_carousel'>
              <img src={Lili} className='image_carousel'/>
            </div>
            <div id='carousel_element_id7' className='box_carousel'>
              <div className="video">
                  <video src={Kamikaze_mp4} autoPlay loop muted playsInline preload="auto" />
              </div>
            </div>
            <div id='carousel_element_id8' className='box_carousel'>
              <div id='carousel_small'>small</div>
              <div id='carousel_OD'>
                Offensive<span id='carousel_span'>&</span>Defensive
              </div>
              <div id='carousel_AA'>Autonomous Aircraft</div>
              <div id='carousel_system'>System</div>
            </div>
        </li>
    </ul>
    </article>
  );
}

export default Carousel;
