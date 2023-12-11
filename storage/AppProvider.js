import React, { createContext, useState, useContext } from "react";
import { lightModeColors , darkModeColors } from "../utilities/Color";
import i18n from "../localization/i18next";


const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Default language
  const [darkMode, setDarkMode] = useState(false); // Default mode

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "ar" : "en"))
    i18n.changeLanguage(language)
  };
  const toggleDarkMode = () =>  setDarkMode((prevMode) => !prevMode);


  return (
    <AppContext.Provider
      value={{
       theme: !darkMode ? lightModeColors : darkModeColors, // here is problem with this property 
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