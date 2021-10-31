import React, { useRef } from 'react'
import image2 from '../assets/img/background.webp'

import { Navbar, Header, Services, Portfolio, Timeline, Team, Footer } from '../components'

const Home = () => {
  const sercicesSection = useRef()
  const portfolioSection = useRef()
  const aboutSection = useRef()
  const teamSection = useRef()
  return (
    <div className="home">
      <Navbar sections={[sercicesSection, portfolioSection, aboutSection, teamSection]} pageType="home" />
      <Header
        title="Welcome To My Personal Website!"
        subtitle="IT'S NICE TO MEET YOU"
        buttonText="Tell me more"
        link="/about-me"
        showButton={true}
        image={image2}
      />
      <Services section={sercicesSection} />
      <Portfolio section={portfolioSection} />
      <Timeline section={aboutSection} />
      <Team section={teamSection} />
      <Footer />
    </div>
  )
}
export default Home
