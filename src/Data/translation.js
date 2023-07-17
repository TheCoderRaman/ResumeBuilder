import i18n from "i18next";
import { en } from "./Locales/en";
import { hi } from "./Locales/hi";

/**
 * This module contain all translations
 * used in the entire application 
 * in various places.
 * 
 * @var const Object translation
 */
export const translation = {
    config: {
        lng: 'en',
        fallbackLng: 'en',
        selected: i18n.language
    },
    resources: {
        en: {
            title: "English",
            countryCode: 'US',
            translation: en,
        },
        hi: {
            title: "हिंदी",
            countryCode: 'in',
            translation: hi,
        }
    }
};

export const { config, resources } = translation;