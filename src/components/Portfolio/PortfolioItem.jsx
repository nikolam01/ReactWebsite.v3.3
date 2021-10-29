import React from 'react'
import './Portfolio.css'

const PortfolioItem = (props) => {
  return (
    <div className="col-lg-4 col-sm-6 mb-4">
      <div className="portfolio-item">
        <div className="portfolio-hover">
          <div className="portfolio-hover-content">
            <i className="fas fa-i fa-3x"></i>
          </div>
        </div>
        <div className="portfolio-image" style={{ cursor: 'pointer' }}>
          <img
            className="img-fluid"
            id="imgPortfolio"
            src={props.image}
            alt={props.subtitle}
            onClick={(e) => {
              e.preventDefault()
              window.location.href = `${props.link}`
            }}
          />
        </div>
        <div className="portfolio-caption">
          <div className="portfolio-caption-heading">{props.title}</div>
          <div className="portfolio-caption-subheading text-muted">
            {props.subtitle}
          </div>
        </div>
      </div>
    </div>
  )
}
export default PortfolioItem
