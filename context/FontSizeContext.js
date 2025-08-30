import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FontSizeContext = createContext();

export const FontSizeProvider = ({ children }) => {
  const [fontSize, setFontSizeState] = useState('Medium');
  const fontSizeMap = { Small: 16, Medium: 20, Large: 24 };
  const appliedFontSize = fontSizeMap[fontSize] || 20;

  useEffect(() => {
    AsyncStorage.getItem('fontSize').then(value => {
      if (value) setFontSizeState(value);
    });
  }, []);

  const setFontSize = async (size) => {
    setFontSizeState(size);
    await AsyncStorage.setItem('fontSize', size);
  };

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize, appliedFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};
