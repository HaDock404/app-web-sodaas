import React, { useContext, useState } from 'react';
import { LanguageContext } from './LanguageContext.jsx';
import '../styles/dropdown_test_2.css'

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
        <div className="dropdown2">
           
            <button onClick={toggleDropdown} className="dropdown-button2">
                {language.toUpperCase()}
            </button>
            {isOpen && (
                <div className="dropdown-menu2">
                    <a className="dropdown-item2" onClick={() => handleLanguageChange('en')}>EN</a>
                    <a className="dropdown-item2" onClick={() => handleLanguageChange('pl')}>PL</a>
                </div>
            )}
        </div>
    )
}

export default Dropdown
