import React from 'react'
import { Navbar, Me, Footer } from '../components'

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
