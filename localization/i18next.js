import i18next from "i18next";
import {initReactI18next } from "react-i18next";
import en from "./translations/en";
import ar from "./translations/ar";

const languageResources = {
  ar: {translation: ar, },
  en: { translation: en,},
};

i18next.use(initReactI18next).init({
  resources: languageResources,
  compatibilityJSON: 'v3', //To make it work for Android devices, add this line.

  defaultLanguage: "ar",
  //language to use if translations in user language are not available
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18next;
