import React from 'react'
import PortfolioItem from './PortfolioItem'
import { usePortfolio } from '../../context/PortfolioContext'

const Portfolio = (props) => {
  let { portfolioData } = usePortfolio()
  return (
    <section
      className="page-section"
      id="portfolio"
      style={{ backgroundColor: '#ffffff' }}
      ref={props.section}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2
            className="section-heading text-uppercase"
            style={{ marginBottom: '5vh' }}
          >
            Portfolio
          </h2>
        </div>
        <div className="row" style={{ backgroundColor: 'white' }}>
          {portfolioData.map((item, index) => {
            return <PortfolioItem {...item} key={index} />
          })}
        </div>
      </div>
    </section>
  )
}
export default Portfolio
