import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import { config, resources } from "./Data/translation";
import { localStorage as ls} from "./Modules/LocalStorageSlim";
import LanguageDetector from 'i18next-browser-languagedetector';

config.selected = ls.get('locale',{ 
    decrypt: true 
});

config.selected = (
    (config.selected === null) ? config.lng : config.selected
);

i18n.use(LanguageDetector).use(initReactI18next).init({
    resources,
    lng: config.selected,
    interpolation: {
        escapeValue: false
    },
    fallbackLng: config.fallbackLng,
});

document.documentElement.setAttribute(
    'lang',config.selected
);

i18n.on('languageChanged', (lng) => {
    ls.set('locale',lng,{ encrypt: false });
    document.documentElement.setAttribute('lang', lng);
});

export default i18n;