import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function TextComponent() {
    const { language } = useContext(LanguageContext);

    const texts = {
        en: 'Hello, world!',
        pl: 'Witaj świecie'
    };

    return <p>{texts[language]}</p>;
}

export default TextComponent;