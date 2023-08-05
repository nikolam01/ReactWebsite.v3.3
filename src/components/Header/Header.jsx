import React from 'react'
import './Header.css'
import { scrollFunction } from '../Navbar/Navbar'

const Header = (props) => {
  return (
    <header className="masthead" id="headerImg" style={{ backgroundImage: `url(${props.image})` }}>
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in" id="titleHeader">
            {props.title}
          </div>
          <div className="intro-heading text-uppercase" id="subtitleHeader">
            {props.subtitle}
          </div>
          {props.showButton && (
            <button
              className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
              id="btnTell"
              onClick={() => {
                scrollFunction(props.section)
              }}
            >
              {props.buttonText}
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
export default Header
