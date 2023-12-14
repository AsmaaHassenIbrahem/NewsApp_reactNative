import i18next from "i18next";
import {initReactI18next } from "react-i18next";
import en from "./translations/en";
import ar from "./translations/ar";
import { Strings } from "../utilities/String";

const languageResources = {
  ar: {translation: ar, },
  en: { translation: en,},
};

i18next.use(initReactI18next).init({
  resources: languageResources,
  compatibilityJSON: 'v3', 
  defaultLanguage: Strings.enKey,
  fallbackLng: Strings.enKey,
  interpolation: {
    escapeValue: false, 
  },
});

export default i18next;
