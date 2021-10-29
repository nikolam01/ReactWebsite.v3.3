import React, { useState, useContext, createContext } from 'react'

const ThemeContext = createContext(null)

export const useTheme = () => {
  return useContext(ThemeContext)
}

export const ThemeProvider = ({ children }) => {
  const themes = {
    dark: {
      color: '#ffffff',
      backgroundColor: '#000000',
    },
    light: {
      color: '#000000',
      backgroundColor: '#ffffff ',
    },
  }
  const [theme, setTheme] = useState(themes.light)

  const setDark = () => {
    setTheme(themes.dark)
  }
  const setLight = () => {
    setTheme(themes.light)
  }
  return (
    <ThemeContext.Provider value={{ theme, setDark, setLight }}>
      {children}
    </ThemeContext.Provider>
  )
}
