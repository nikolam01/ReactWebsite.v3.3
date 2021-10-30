import React, { useState, useEffect, useContext, createContext } from 'react'
import data from '../data/data.json'

const ServicesContext = createContext(null)

export const useServices = () => {
  return useContext(ServicesContext)
}

export const ServicesProvider = ({ children }) => {
  const [servicesData, setServicesData] = useState([])

  useEffect(() => {
    setServicesData(data.services)
  }, [servicesData])

  return (
    <ServicesContext.Provider value={{ servicesData }}>
      {children}
    </ServicesContext.Provider>
  )
}
