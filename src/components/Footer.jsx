import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { Link } from 'react-router-dom';

import '../styles/footer.css'
import Logo from './Logo.jsx'

function Footer(props) {

    const { language } = useContext(LanguageContext);

    const made = {
        en: 'Made by @haDock404 with',
        pl: 'Wykonane przez @haDock404'
    };
    const legal1 = {
        en: 'Legal Notices',
        pl: 'Informacje Prawne'
    };
    const legal2 = {
        en: 'Privacy Policy',
        pl: 'Polityka Prywatności'
    }
    const question = {
        en: 'Do you have any remaining questions?',
        pl: 'Polityka Prywatności'
    }
    const answer = {
        en: 'Send us a message and we will try to respond to you as quickly as possible.',
        pl: 'Wyślij nam wiadomość, a my postaramy się odpowiedzieć tak szybko, jak to możliwe.'
    }
    const button = {
        en: 'Contact',
        pl: 'Kontakt'
    }

    return (
        <footer>
            <div className='footer'>
                <div className='top'>
                    <div className='question'>
                        <div className='question_text'>
                            <h3 className='h3'>{question[language]}</h3>
                            <div id='question'>{answer[language]}</div>
                        </div>
                        <Link to="/" class="cta-button" id='button_bottom'>{button[language]}</Link>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='info'>
                        <Logo />
                        <div className='made'><span className='color'>{made[language]}</span> 💖</div>
                    </div>
                    <div className='info_bis'>
                        <Link className='legal'>{legal1[language]}</Link>
                        <Link className='legal'>{legal2[language]}</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer