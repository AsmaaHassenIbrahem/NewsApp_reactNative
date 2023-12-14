import useAsyncStorage from "../hooks/useAsyncStorage";
import { Strings } from "../utilities/String";

const LanguageSettingsStore = () => {
  
  const {storedLanguageValue: storedValue, setvalue} = useAsyncStorage(Strings.languageKey, value= Strings.arKey);


  const sortLanguage = (value) => {
    setvalue(value)
  }

  return [storedValue , sortLanguage];

};

export default LanguageSettingsStore 