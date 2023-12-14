import React, { createContext, useState, useContext } from "react";
import { lightModeColors , darkModeColors } from "../utilities/Color";
import i18n from "../localization/i18next";
import { Strings } from "../utilities/String";


const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState(Strings.arKey); 
  const [darkMode, setDarkMode] = useState(false); 

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === Strings.arKey ? Strings.enKey  : Strings.arKey ))
    i18n.changeLanguage(language)
  };
  const toggleDarkMode = () =>  setDarkMode((prevMode) => !prevMode);


  return (
    <AppContext.Provider
      value={{
       theme: !darkMode ? lightModeColors : darkModeColors,
        language,
        darkMode,
        toggleLanguage,
        toggleDarkMode,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);