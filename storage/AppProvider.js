import React, { createContext, useEffect, useContext } from "react";
import { lightModeColors , darkModeColors } from "../utilities/Color";
import i18n from "../localization/i18next";
import { Strings } from "../utilities/String";
import LanguageSettingsStore from "./LanguageSettingsStore";
import ThemeSettingsStore from "./ThemeSettingsStore";
const AppContext = createContext(0);

export const AppProvider = ({ children }) => {

  const {storedLanguageValue, sortLanguage}= LanguageSettingsStore()
  const {storedThemeValue , sortTheme} = ThemeSettingsStore()
  
  const toggleLanguage = () => {
   sortLanguage( storedLanguageValue === Strings.arKey ? Strings.enKey  : Strings.arKey);
    i18n.changeLanguage(storedLanguageValue);
  };

  const toggleDarkMode = () =>  {
   sortTheme(!storedThemeValue)
  }

  return (
    <AppContext.Provider
      value={{
       theme: !storedThemeValue ? lightModeColors : darkModeColors,
       language: storedLanguageValue,
       darkMode: storedThemeValue ,
        toggleLanguage,
        toggleDarkMode,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);