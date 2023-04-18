
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from './local/en.json'
import translationAR from './local/ar.json'

import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({

        resources: {
            en: {
                translation: translationEN
            },
            ar: {
                translation: translationAR
            }
        },
        lng: "en",
        whitelist: ['en', 'ar'],
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        },
        // react: {
        //     useSuspense: false
        // }
    });

export default i18n;