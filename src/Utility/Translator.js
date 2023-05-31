import setUp from './../i18n';
import { useTranslation } from 'react-i18next';

/**
 * Give the translation of the specfied key. 
 * 
 * @param String key
 * @param Object data 
 * @returns String
 */
export const T = (...args) => {
    setUp();
    const {t} = useTranslation();

    return t(...args);
};

/**
 * Give the translation of the specfied key. 
 * 
 * @param String key
 * @param Object data 
 * @returns String
 */
export const _ = (...args) => {
    setUp();
    const {t} = useTranslation();

    return t(...args);
};