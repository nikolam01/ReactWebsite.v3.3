import React, { useRef } from 'react'

import image2 from '../assets/img/background.webp'

//components
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Services from '../components/Services/Services'
import Portfolio from '../components/Portfolio/Portfolio'
import Timeline from '../components/Timeline/Timeline'
import Team from '../components/Team/Team'
import Footer from '../components/Footer/Footer'

const Home = () => {
  const portfolioSection = useRef()
  const aboutSection = useRef()
  const teamSection = useRef()
  return (
    <div className="home">
      <Navbar
        sections={[portfolioSection, aboutSection, teamSection]}
        pageType="home"
      />
      <Header
        title="Welcome To My Personal Website!"
        subtitle="IT'S NICE TO MEET YOU"
        buttonText="Tell me more"
        link="/about-me"
        showButton={true}
        image={image2}
      />
      <Services />
      <Portfolio section={portfolioSection} />
      <Timeline section={aboutSection} />
      <Team section={teamSection} />
      <Footer />
    </div>
  )
}
export default Home
