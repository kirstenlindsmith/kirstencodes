import React from 'react';
import useSnackbar from './useSnackbar';

//taken from https://usehooks.com/useLocalStorage/
function useLocalStorage<T>(key: string, initialValue?: T) {
  const snackbar = useSnackbar();
  const [storedValue, setStoredValue] = React.useState(() => {
    if (typeof window === 'undefined') return initialValue;
    try {
      const storedValue = window.localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (error) {
      snackbar?.setErrorMessage(
        'Error fetching from local storage! Refresh the page and try again.'
      );
      console.error('useLocalStorage error:', error);
      return initialValue;
    }
  });

  const setValue = (newValue: T) => {
    try {
      setStoredValue(newValue);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(newValue));
      }
    } catch (error) {
      snackbar?.setErrorMessage(
        'Error setting value to local storage! Refresh the page and try again.'
      );
      console.error('Set local storage error:', error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
