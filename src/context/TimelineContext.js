import React, { useState, useEffect, useContext, createContext } from 'react'
import data from '../data/data.json'

const TimelineContext = createContext(null)

export const useTimeline = () => {
  return useContext(TimelineContext)
}

export const TimelineProvider = ({ children }) => {
  const [timelineData, setTimelineData] = useState([])

  useEffect(() => {
    setTimelineData(data.timeline)
  }, [timelineData])

  return (
    <TimelineContext.Provider value={{ timelineData }}>
      {children}
    </TimelineContext.Provider>
  )
}
