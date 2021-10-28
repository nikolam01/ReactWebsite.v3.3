import React, { useRef } from 'react'

import image2 from '../Assets/img/background.webp'

//components
import Navbar from '../Common/Navbar'
import Header from '../Common/Header'
import Services from '../Common/Services'
import Portfolio from '../Common/Portfolio'
import Timeline from '../Common/Timeline'
import Team from '../Common/Team'
import Footer from '../Common/Footer'

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
        link="/me"
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
