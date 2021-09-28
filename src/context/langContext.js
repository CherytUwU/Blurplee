import React, { useState } from 'react';
import {IntlProvider} from 'react-intl';

import LangEnUS from '../lang/en-US.json';
import LangEsMX from '../lang/es-MX.json';
import LangJaJP from '../lang/ja-JP.json';

const langContext = React.createContext();

const LangProvider = ({children}) => {
    let localeDefault;
    let defaultMessages;
    const Lang = localStorage.getItem('lang');

    if(Lang){
        localeDefault = Lang;

        if(Lang === 'es-MX'){
            defaultMessages = LangEsMX;
        } else if(Lang === 'en-US'){
            defaultMessages = LangEnUS;
        } else if(Lang === "ja-JP"){
            defaultMessages = LangJaJP;
        } else {
            localeDefault = 'es-MX';
            defaultMessages = LangEsMX;
        }
    }

    const [messages, establecerMensajes] = useState(defaultMessages);
    const [locale, establecerLocale] = useState(localeDefault);

    const LanguageSelector = (lang) => {
        switch (lang){
            case 'es-MX':
                establecerMensajes(LangEsMX);
                establecerLocale('es-MX');
                localStorage.setItem('lang', 'es-MX');
                break;
            case 'en-US':
                establecerMensajes(LangEnUS);
                establecerLocale('en-US');
                localStorage.setItem('lang', 'en-US');
                break;
            case 'ja-JP':
                establecerMensajes(LangJaJP);
                establecerLocale('ja-JP');
                localStorage.setItem('lang', 'ja-JP');
                break;
            default: 
                establecerMensajes(LangEsMX);
                establecerLocale('es-MX');
                break;
        }
    }
    
    return (
        <langContext.Provider value={{LanguageSelector: LanguageSelector}}>
            <IntlProvider locale={locale} messages={messages}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
}

export { LangProvider, langContext };