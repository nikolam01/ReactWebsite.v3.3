import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioItem = (props) => {
  return (
    <div className="col-lg-4 col-sm-6 mb-4">
      <div className="portfolio-item">
        <Link className="portfolio-link" data-toggle="modal">
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <i className="fas fa-i fa-3x"></i>
            </div>
          </div>
          <img
            className="img-fluid"
            id="imgPortfolio"
            src={props.image}
            alt=""
            style={{ cursor: 'pointer' }}
            herf={props.link}
          />
        </Link>
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
