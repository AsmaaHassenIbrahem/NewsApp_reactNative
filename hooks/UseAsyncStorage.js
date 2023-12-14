import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState , useEffect } from 'react';

const useAsyncStorage = (key, initialvalue) => {

  const [storedValue, setStoredValue] = useState(false);

    const getStoredItem = async (key, initialvalue) => {
      try {
        const item = await AsyncStorage.getItem(key);
        const value = item ? JSON.parse(item) : initialvalue;
        setStoredValue(value);
      } catch (error) {
        console.log("getStore "+error);
      }
    }
  
    useEffect(() => {
      console.log("useEffect1 key ===> " + key)
      
      console.log("useEffect1 init ===> " + initialvalue)

        getStoredItem(key, initialvalue);
    }, [key, initialvalue]);
  
    const setvalue = async (value) => {
      try {

          setStoredValue(value);
        await AsyncStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.log("setStore "+error);
      }
    };
  
    return {storedValue, setvalue};
  };

  export default useAsyncStorage