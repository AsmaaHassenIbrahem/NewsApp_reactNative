

import { Localization } from "expo";
import i18n from "i18next";
import { reactI18nextModule , initReactI18next} from "react-i18next";
import {en} from "./translations/en.json"
import {ar} from "./translations/ar.json"
const resources = {
 en: { translation: en },
 ar: { translation: ar },
};

i18n.use(reactI18nextModule).init({
  resources,
  lng: Localization.locale,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  cleanCode: true,
});

export default i18n;