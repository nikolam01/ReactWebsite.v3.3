import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Me from '../components/Me/Me'
import Footer from '../components/Footer/Footer'

const AboutMe = () => {
  return (
    <div className="about-me">
      <Navbar pageType="about" />
      <Me />
      <Footer />
    </div>
  )
}
export default AboutMe
