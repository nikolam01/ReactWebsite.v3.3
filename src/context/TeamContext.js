import React, { useState, useEffect, useContext, createContext } from 'react'
import data from '../data/data.json'

const TeamContext = createContext(null)

export const useTeam = () => {
  return useContext(TeamContext)
}

export const TeamProvider = ({ children }) => {
  const [teamData, setTeamData] = useState([])

  useEffect(() => {
    setTeamData(data.team_members)
  }, [teamData])

  return (
    <TeamContext.Provider value={{ teamData }}>{children}</TeamContext.Provider>
  )
}
