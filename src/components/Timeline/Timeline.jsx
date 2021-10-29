import React, { useState, useEffect } from 'react'
import data from '../../data/data.json'
import TimelineItem from './TimelineItem'

const Timeline = (props) => {
  const [timelineData, setTimelineData] = useState([])

  useEffect(() => {
    setTimelineData(data.timeline)
  }, [timelineData])
  return (
    <section className="page-section" id="about" ref={props.section}>
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">About</h2>
          <br />
        </div>
        <ul className="timeline">
          {timelineData.map((item, index) => {
            return <TimelineItem {...item} key={index} />
          })}
        </ul>
      </div>
    </section>
  )
}
export default Timeline
