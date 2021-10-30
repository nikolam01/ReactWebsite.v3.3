import React from 'react'
import TimelineItem from './TimelineItem'
import { useTimeline } from '../../context/TimelineContext'

const Timeline = (props) => {
  let { timelineData } = useTimeline()
  return (
    <section className="page-section" id="about" ref={props.section}>
      <div className="container">
        <div className="text-center">
          <h2
            className="section-heading text-uppercase"
            style={{ marginBottom: '5vh' }}
          >
            About
          </h2>
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
