import { useNavigate } from 'react-router-dom';
import '../styles/errorpage.css';
import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function ErrorPage({ statusCode }){
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);

  const error = {
    en: 'Error',
    pl: 'Błąd'
  };

  const message = {
    en: 'The page you are looking for does not exist.',
    pl: 'Strona, której szukasz nie istnieje.'
  };

  const back = {
    en: 'Back to home',
    pl: 'Powrót do domu'
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="error-page">
      <h1 className='error-message'>{error[language]} {statusCode || '404'}</h1>
      <p>{message[language]}</p>
      <button onClick={handleBackToHome} className="back-button cta-button">
        {back[language]}
      </button>
    </div>
  );
};

export default ErrorPage;