import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/errorpage.css';

const ErrorPage = ({ statusCode, message }) => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="error-page">
      <h1>Erreur {statusCode || '404'}</h1>
      <p>{message || "La page que vous cherchez n'existe pas."}</p>
      <button onClick={handleBackToHome} className="back-button">
        Retour à l'accueil
      </button>
    </div>
  );
};

export default ErrorPage;