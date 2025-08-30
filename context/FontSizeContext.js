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

// History Context
export const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('searchHistory').then(value => {
      if (value) setHistory(JSON.parse(value));
    });
  }, []);

  const addToHistory = async (item) => {
    const updated = [item, ...history.filter(h => h !== item)].slice(0, 20);
    setHistory(updated);
    await AsyncStorage.setItem('searchHistory', JSON.stringify(updated));
  };

  const clearHistory = async () => {
    setHistory([]);
    await AsyncStorage.removeItem('searchHistory');
  };

  return (
    <HistoryContext.Provider value={{ history, addToHistory, clearHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};
