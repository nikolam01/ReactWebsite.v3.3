import React from 'react'
import { Link } from 'react-router-dom'
import '../Assets/CSS/Footer.css'

const Footer = () => {
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 text-lg-left" id="copyright">
            Copyright © Nikola Mirilo 2021
          </div>
          <div className="col-lg-4 my-3 my-lg-0">
            <Link
              className="btn btn-dark btn-social mx-2"
              type="button"
              onClick={(e) => {
                e.preventDefault()
                window.location.href =
                  'https://www.instagram.com/nikola.mirilo/'
              }}
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              className="btn btn-dark btn-social mx-2"
              type="button"
              onClick={(e) => {
                e.preventDefault()
                window.location.href =
                  'https://www.facebook.com/nikola.mirilo.5/'
              }}
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              className="btn btn-dark btn-social mx-2"
              type="button"
              onClick={(e) => {
                e.preventDefault()
                window.location.href =
                  'https://www.linkedin.com/in/nikola-mirilo'
              }}
            >
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </div>
          <div className="col-lg-4 text-lg-right">
            <label className="mr-3" id="privacy">
              Email:{' '}
              <Link
                onClick={(e) => {
                  e.preventDefault()
                  window.location.href = 'mailto:nikolamirilo@gmail.com'
                }}
              >
                nikolamirilo@gmail.com
              </Link>
            </label>
            <label id="terms">Contact number: +381 60 4278 175</label>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
