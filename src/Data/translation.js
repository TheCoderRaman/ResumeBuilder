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
        fallbackLng: 'en'
    },
    resources: {
        en: {
            translation: en,
        },
        hi: {
            translation: hi,
        }
    }
};