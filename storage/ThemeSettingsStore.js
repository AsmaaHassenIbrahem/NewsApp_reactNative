import useAsyncStorage from "../hooks/useAsyncStorage";
import { Strings } from "../utilities/String";

const ThemeSettingsStore = () => {
    const {storedValue, setvalue} = useAsyncStorage(Strings.themeKet, value= false);

    const sortTheme = (value) => {
      setvalue(value)
    };
    
    return {storedThemeValue: storedValue , sortTheme};

    };

export default ThemeSettingsStore
