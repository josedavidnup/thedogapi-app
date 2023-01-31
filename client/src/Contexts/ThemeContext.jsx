import React, { createContext, useState } from 'react';
const ThemeContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  const data = {
    theme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ContextProvider };
export default ContextProvider;
