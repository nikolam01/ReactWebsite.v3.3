import React, { Component } from 'react'
import './Assets/CSS/PageWrapper.css'
import { Link } from 'react-router-dom'

class PageWrapper extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top"
          id="mainNav"
        >
          <div className="container" id="navContainer">
            <li
              className="navbar-brand js-scroll-trigger"
              id="logoNM"
              style={{ cursor: 'pointer' }}
              onClick={(e) => {
                e.preventDefault()
                window.location.href = '/'
              }}
            >
              Nikola Mirilo
            </li>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
              id="menuBtn"
              style={{ borderRadius: '10px' }}
            >
              Menu
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto" id="ul-items">
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/portfolio">
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link js-scroll-trigger" to="/">
                    Home
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
    )
  }
}
export default PageWrapper
