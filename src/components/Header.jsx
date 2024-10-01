import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext.jsx';

import '../styles/header.css'

import Logo from './Logo.jsx'
import WorldIcon2 from './WorldIcon_test_2.jsx'
import Dropdown2 from './Dropdow_test_2.jsx';

function Header() {

    const { language } = useContext(LanguageContext);

    const about_us = {
        en: 'About Us',
        pl: 'O Nas'
    };
    const commitments = {
        en: 'Commitments',
        pl: 'Zobowiązania'
    };
    const products = {
        en: 'Products',
        pl: 'Produkty'
    }
    
    return (
        <header className="header3">
            <Link to="/test" className="logo3">
                <Logo />
            </Link>
            <nav className="nav-links3">
                <Link className="underline-on-hover3" to="/app-team-sodaas/About_us">{about_us[language]}</Link>
                <Link className="underline-on-hover3" to="/commitments">{commitments[language]}</Link>
                <Link className="underline-on-hover3" to="/products">{products[language]}</Link>
                <div className='lang-menu3'>
                    <WorldIcon2 />
                    <Dropdown2 />
                </div>  
            </nav> 
        </header>
    );
}

export default Header