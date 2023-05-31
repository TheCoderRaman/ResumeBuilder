import i18n from 'i18next';
import { Locales } from './Data/Locales';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export default function setUp() {
    const resources = Locales.resources;

    i18n.use(LanguageDetector).use(initReactI18next).init({
        resources,
        lng: Locales.config.lng,
        interpolation: {
            escapeValue: false
        },
        fallbackLng: Locales.config.fallbackLng,
    });

    document.documentElement.setAttribute('lang',
        Locales.config.lng
    );
    i18n.on('languageChanged', (lng) => {
        document.documentElement.setAttribute('lang', lng);
    });
}