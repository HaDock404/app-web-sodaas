import React, { useContext, useState } from 'react';
import { LanguageContext } from './LanguageContext';
import '../styles/dropdown.css'
import WorldIcon from './WorldIcon.jsx'

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const { language, setLanguage } = useContext(LanguageContext);

    const handleLanguageChange = (lang) => {
        setIsOpen(!isOpen);
        setLanguage(lang);
    };

    return (
        <div className="dropdown">
           
            <button onClick={toggleDropdown} className="dropdown-button">
                {language.toUpperCase()}
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    <a className="dropdown-item" onClick={() => handleLanguageChange('en')}>EN</a>
                    <a className="dropdown-item" onClick={() => handleLanguageChange('pl')}>PL</a>
                </div>
            )}
        </div>
    )
}

export default Dropdown
