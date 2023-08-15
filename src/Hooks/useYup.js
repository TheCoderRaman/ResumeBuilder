import * as yup from 'yup';
import YupPassword from 'yup-password';
import { useTranslation } from 'react-i18next';

export function useYup(){
    YupPassword(yup);

    const locales = {};
    const { t } = useTranslation();
    
    yup.setLocale(locales.data = {
        mixed: {
          default: ({ path }) => (
            t(`:field is invalid`,{
              field: path
            })
          ),
          required: ({ path }) => (
            t(`:field is a required field`,{
              field: path
            })
          ),
          email: ({ path }) => (
            t(`:field must be a valid email`,{
              field: path
            })
          ),
        },
        string: {
          min: ({ min, path }) => (
            t(`:field must be at least :min characters`,{
              field: path, min: min
            })
          ),
          max: ({ max, path }) => (
            t(`:field must be at most :max characters`,{
              field: path, max: max
            })
          ),
          minNumbers: ({ number , path }) => (
            t(`:field must contain :number amount of numbers or more.`,{
              field: path,number: number
            })
          ),
          minSymbols: ({ number , path }) => (
            t(`:field must contain :number amount of symbols or more.`,{
              field: path,number: number
            })
          ),
          minLowercase: ({ number , path }) => (
            t(`:field must contain :number amount of lowercase letters or more.`,{
              field: path,number: number
            })
          ),
          minUppercase: ({ number , path }) => (
            t(`:field must contain :number amount of uppercase letters or more.`,{
              field: path,number: number
            })
          )
        },
    });

    return { yup, locales };
}