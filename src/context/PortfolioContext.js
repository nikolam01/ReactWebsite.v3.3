import React, { useState, useEffect, useContext, createContext } from 'react'
import data from '../data/data.json'

const PortfolioContext = createContext(null)

export const usePortfolio = () => {
  return useContext(PortfolioContext)
}

export const PortfolioProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState([])

  useEffect(() => {
    setPortfolioData(data.portfolio)
  }, [portfolioData])

  return (
    <PortfolioContext.Provider value={{ portfolioData }}>
      {children}
    </PortfolioContext.Provider>
  )
}
