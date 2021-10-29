import React from 'react'
import { Link } from 'react-router-dom'

export const scrollFunction = (sectionName) => {
  sectionName.current.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'end',
  })
}

const Navbar = (props) => {
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
          >
            <i
              class="fas fa-bars"
              style={{ fontSize: '2rem', color: '#ffffff' }}
            ></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <div className="navbar-nav text-uppercase ml-auto" id="ul-items">
              {props.pageType === 'home' ? (
                <div className="nav-item">
                  <li
                    className="nav-link js-scroll-trigger"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                    onClick={() => scrollFunction(props.sections[0])}
                    style={{ cursor: 'pointer' }}
                  >
                    Services
                  </li>
                </div>
              ) : (
                <></>
              )}

              {props.pageType === 'home' ? (
                <div className="nav-item">
                  <li
                    className="nav-link js-scroll-trigger"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                    onClick={() => scrollFunction(props.sections[1])}
                    style={{ cursor: 'pointer' }}
                  >
                    Portfolio
                  </li>
                </div>
              ) : (
                <></>
              )}

              {props.pageType === 'home' ? (
                <div className="nav-item">
                  <li
                    className="nav-link js-scroll-trigger"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                    onClick={() => scrollFunction(props.sections[2])}
                    style={{ cursor: 'pointer' }}
                  >
                    About
                  </li>
                </div>
              ) : (
                <></>
              )}

              {props.pageType === 'home' ? (
                <div className="nav-item">
                  <li
                    className="nav-link js-scroll-trigger"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                    onClick={() => scrollFunction(props.sections[3])}
                    style={{ cursor: 'pointer' }}
                  >
                    Team
                  </li>
                </div>
              ) : (
                <></>
              )}

              {props.pageType === 'home' ? (
                <div className="nav-item">
                  <Link
                    className="nav-link js-scroll-trigger"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </div>
              ) : (
                <div className="nav-item">
                  <Link
                    className="nav-link js-scroll-trigger"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                    to="/"
                  >
                    Home
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
