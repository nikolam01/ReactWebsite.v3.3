import React from 'react'

const TimelineItem = (props) => {
  return (
    <li className={props.liType === 'left' ? '' : 'timeline-inverted'}>
      <div className="timeline-image">
        <img
          className="rounded-circle img-fluid"
          src={props.image}
          alt={props.imageName}
        />
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4>{props.date}</h4>
          <h4 className="subheading">{props.title}</h4>
        </div>
        <div className="timeline-body">
          <p className="text-muted">{props.description}</p>
        </div>
      </div>
    </li>
  )
}

export default TimelineItem
