import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";


import './styles/normalize.css'
import GlobalStyle from './styles/createGlobalStyle.jsx'

import reportWebVitals from './reportWebVitals.js';
import { LanguageProvider } from './components/LanguageContext.jsx';

import HomePage from './pages/HomePage.jsx';
import AboutUs from './pages/AboutUs.jsx'

import ErrorPage from './components/ErrorPage.jsx';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <LanguageProvider>
    <GlobalStyle/>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/About_us" element={<AboutUs />}/>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </LanguageProvider>
  </HashRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
