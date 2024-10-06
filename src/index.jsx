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
import Commitments from './pages/Commitments.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import T100d from './pages/T100d.jsx'
import T200d from './pages/T200d.jsx'
import Legal from './pages/Legal.jsx'
import Privacy from './pages/Privacy.jsx'

import ErrorPage from './components/ErrorPage.jsx';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <LanguageProvider>
    <GlobalStyle/>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/aboutUS" element={<AboutUs />}/>
          <Route path="/commitments" element={<Commitments />}/>
          <Route path="/products" element={<ProductsPage />}/>
          <Route path="/t100d" element={<T100d />}/>
          <Route path="/t200d" element={<T200d />}/>
          <Route path="/legal" element={<Legal />}/>
          <Route path="/privacy" element={<Privacy />}/>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </LanguageProvider>
  </HashRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
