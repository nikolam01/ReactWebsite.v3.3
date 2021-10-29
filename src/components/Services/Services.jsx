import React, { useState, useEffect } from 'react'
import SingleService from './SingleService'
import './Services.css'
import data from '../../data/data.json'

const Services = (props) => {
  const [servicesData, setServicesData] = useState([])

  useEffect(() => {
    setServicesData(data.services)
  }, [servicesData])
  return (
    <section className="page-section" id="services" ref={props.section}>
      <div className="container">
        <div className="text-center">
          <h2
            className="section-heading text-uppercase"
            id="title"
            style={{ marginBottom: '5vh' }}
          >
            Services
          </h2>
          <br />
          <br />
        </div>
        <div className="row text-center" id="serviceItem">
          {servicesData.map((item, index) => {
            return <SingleService {...item} key={index} />
          })}
        </div>
      </div>
    </section>
  )
}
export default Services
