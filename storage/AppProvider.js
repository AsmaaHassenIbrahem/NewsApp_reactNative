import React, { createContext, useState, useContext, useEffect } from "react";
import { darkModeColors } from "../utilities/Color";
import { lightModeColors } from "../utilities/Color";
import { useTranslation } from "react-i18next";
import { Strings } from "../utilities/String";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState(Strings.enKey); // Default language
  const [darkMode, setDarkMode] = useState(false); // Default mode
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => {
      return prevLanguage === Strings.enKey ? Strings.arKey : Strings.enKey;
    });
  };
  const toggleDarkMode = () => setDarkMode((prevMode) => !prevMode);

  useEffect(() => {
    i18n.changeLanguage(language === Strings.enKey  ? Strings.arKey : Strings.enKey);
  }, [language]);

  return (
    <AppContext.Provider
      value={{
        theme: !darkMode ? lightModeColors : darkModeColors, 
        language,
        darkMode,
        toggleLanguage,
        toggleDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
