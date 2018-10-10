import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { defaultLanguage } from '../config';
import srData from './sr.js';
import enData from './en.js';
   
i18n
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: enData
      },
      sr: {
        translation: srData
      }
    },
    react: {
      wait: true
    },
    fallbackLng: defaultLanguage
  });

export default i18n;