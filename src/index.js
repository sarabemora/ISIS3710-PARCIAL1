import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IntlProvider } from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const language = navigator.language;
const isSpanish = language.startsWith('es');

const locale = isSpanish ? 'es-ES' : 'en-US';
const messages = isSpanish ? localeEsMessages : localeEnMessages;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IntlProvider locale = {locale} messages={messages}>
    <App />
  </IntlProvider>
);