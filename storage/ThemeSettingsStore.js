import useAsyncStorage from "../hooks/useAsyncStorage";
import { Strings } from "../utilities/String";

const ThemeSettingsStore = () => {
    const {storedThemeValue: storedValue, setvalue} = useAsyncStorage(Strings.themeKet, value= false);

    const sortTheme = (value) => {
      setvalue(value)
    };
    
    return [storedValue , sortTheme];

    };

export default ThemeSettingsStore
